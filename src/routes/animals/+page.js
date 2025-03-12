import {animals} from './animals.js'

export function load() {
    return {
        summaries: animals.map((animal) => ({
            slug: animal.slug,
            title: animal.name
        })),

        cards: animals.map((animal) => ({
            slug: animal.slug,
            title: animal.name,
            image: animal.image,
            description: animal.shortdesc,
        }))
    };
}