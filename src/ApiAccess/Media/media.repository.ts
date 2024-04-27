import { MediaDetailsDto } from './dtos/mediaDetials.model'

export class MediaRepository {
    private readonly baseUrl = process.env['NEXT_PUBLIC_BACKEND_API']
    constructor(){}

    async searchByTerm(term: string) : Promise<MediaDetailsDto[]> {
        const response = await fetch(`${this.baseUrl}/media/search?term=${term}`)
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