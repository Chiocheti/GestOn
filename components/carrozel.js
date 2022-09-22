import {
    Center,
    Heading,
    Text,
} from '@chakra-ui/react';
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import NavbarLogOn from '../components/navbarLogOnFornecedor';
import Router from "next/router";

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(next)
            })
        })
    }
}
function goEditProduct() {
    Router.push('/editProduct');
  }

export default function App() {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <><br/><br/><br/><br/>
            <Center><Heading
                fontWeight={300}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                <Text as={'span'} color={'green.400'}>
                    Sugestões de Produtos
                </Text>
            </Heading></Center>
            <div style={{ margin: '100px', paddingRight: '5px' }} >
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                    <img onClick={() => goEditProduct()} src='https://i.imgur.com/iLripy4.png' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide2">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757703758450759/media-2.jpeg' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide3">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757703989141604/media-3.jpeg' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide4">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757704282734734/media-4.jpeg' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide5">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757704555380756/media-5.jpeg' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide6">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757704555380756/media-5.jpeg' alt='JS' /></div>
                </div>

                <div ref={thumbnailRef} className="keen-slider thumbnail">
                    <div className="keen-slider__slide number-slide1">
                    <img src='https://agristore.com/image/cache/catalog/Di%20Solo/milho-ipanema-20kg-1200x1200.png' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide2">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757703758450759/media-2.jpeg' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide3">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757703989141604/media-3.jpeg' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide4">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757704282734734/media-4.jpeg' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide5">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757704555380756/media-5.jpeg' alt='JS' /></div>
                    <div className="keen-slider__slide number-slide6">
                    <img src='https://cdn.discordapp.com/attachments/700889540801331291/1020757704555380756/media-5.jpeg' alt='JS' /></div>
                </div>
            </div>
        </>
    )
}
