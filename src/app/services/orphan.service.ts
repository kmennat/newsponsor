import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrphanService {

  constructor(private http: HttpClient) { }
  public lang = localStorage.getItem('lang')||'';

  public selectedLang = new BehaviorSubject<string>(this.lang);
  addOrphan(data:any){
    return this.http.post('https://api.sponsorship.com/api/orphans', data)
  }

  getOrphanData(){
    return this.http.get("assets/usersData.json")
  }
  getLang() {
    return this.selectedLang.asObservable();
  }
  get() {
    return this.http.get(`assets/i18n/${this.selectedLang.value}.json`);
  }
  setLang(lang: string) {
    this.selectedLang.next(lang);
    //this.get();
  }
}
