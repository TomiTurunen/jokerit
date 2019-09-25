import { Pipe, PipeTransform } from "@angular/core";
import { NgbdTableSortableModule } from './sortable_table/table-sortable.module';

@Pipe({
    name: 'convertBrokenMarks'
})
export class ConvertBrokenMarks implements PipeTransform {

    transform(value: string, character: string): string {
        console.log(character)
        return value.replace(character, '\'');
    }
}