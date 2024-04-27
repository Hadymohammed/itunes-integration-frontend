import { MediaDetailsDto } from './dtos/mediaDetials.model'


// const baseUrl = `${process.env['NEXT_PUBLIC_BACKEND_API']}/media`;

export class MediaRepository {
    static readonly baseUrl = `${process.env['NEXT_PUBLIC_BACKEND_API']}/media`;
    constructor(){}

    static async searchByTerm(term: string) : Promise<MediaDetailsDto[]> {
        const response = await fetch(`${this.baseUrl}?term=${term}`)
        const data = await response.json()
        return data.map((result: any) => new MediaDetailsDto(
            result.id,
            result.type,
            result.name,
            result.viewUrl,
            result.artworkUrl100,
            result.artist,
            result.artistViewUrl
        ))
    }
}