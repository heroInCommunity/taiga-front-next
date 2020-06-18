
import { HttpParams } from '@angular/common/http';

type dataTypes = string | number | boolean | Date;

export class UtilsService {
  constructor() {}

  static buildQueryParams(source: Record<string, any>): HttpParams {
    let target: HttpParams = new HttpParams();

    Object.keys(source).forEach((key: string) => {
        const value: dataTypes | dataTypes[] = source[key];

        if (Array.isArray(value)) {
          target = target.append(key, value.join(','));
        } else if (value.toString) {
          target = target.append(key, value.toString());
        }
    });

    return target;
  }
}
