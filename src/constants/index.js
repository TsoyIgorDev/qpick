import { telegram, vk, whatsapp } from "../assets/icons"
import { airpods, bo4, earpods1, earpods2, gh04, s852l } from "../assets/images"

export const headphones = [
    {
        id: 1,
        imgURL: s852l,
        title: 'Apple BYZ S852I',
        price: 2927,
        rate: 4.7,
        oldprice: 3527,
    },
    {
        id: 2,
        imgURL: earpods1,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
    {
        id: 3,
        imgURL: earpods2,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
]

export const wirelessHeadphones = [
    {
        id: 4,
        imgURL: airpods,
        title: 'Apple AirPods',
        price: 9527,
        rate: 4.7,
    },
    {
        id: 5,
        imgURL: gh04,
        title: 'GERLAX GH-04',
        price: 6527,
        rate: 4.7,
    },
    {
        id: 6,
        imgURL: bo4,
        title: 'BOROFONE BO4',
        price: 7527,
        rate: 4.7,
    },
]

export const socialNetworks = [
    {
        label: 'vk',
        imgURL: vk,
        href: 'https://vk.com/neoflex_ru'
    },
    {
        label: 'telegram',
        imgURL: telegram,
        href: 'https://t.me/neoflexcareers'
    },
    {
        label: 'whatapp',
        imgURL: whatsapp,
        href: 'https://t.me/href'
    },
]