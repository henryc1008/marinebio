import {animals} from "../animals.js"
import {error} from "@sveltejs/kit"
export function load({params}){
    const animal = animals.find((animal)=> animal.slug === params.slug);
    if (!animal) error(404);
    return {
        animal
    };
}