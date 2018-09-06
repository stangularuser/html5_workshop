import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { CLIENT_RENEG_LIMIT } from "tls";

export interface Giphy{

}

@Injectable()
export class GiphyService{

readonly API_KEY="xxxx";

   
constructor(private http: HttpClient){}
    
    search(q: string)

const params = new HttpParams()
.set('api_key',this.API_KEY)
.set('q', searchTerm')
.set('limit', limit+''')
.set('offset', offset+'');

return(
this.http.get<Giphy[]>('https://api.giphy.com/v1/gifs/search', {params: params})
.toPromise()
.then((result: any) => {
    const g: Giphy[] = [];
    const data = result.data;
for (let d of data) {
    g.push({
        title: d.title,
        imageUrL: d.images.fixed_width_url
    })
}
    return (g);
})
);
}}