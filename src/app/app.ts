import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe,JsonPipe,DatePipe,TitleCasePipe,DecimalPipe} from '@angular/common';
import { ConvertPipe } from './convert-pipe';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,  TitleCasePipe , DatePipe , CurrencyPipe ,JsonPipe ,DecimalPipe, ConvertPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name!:string;
  date!:string;
  amount!:number;
  miles!:number;

  onNameChange(event:Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this.name=value;
  }

    onDateChange(event:Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this.date=value;
  }

  onAmountChange(event:Event){
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value);

    this.amount=value;
  }

  onMilesChange(event:Event){
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);

    this.miles=value;
  }

}