export class Recipe {

    constructor(
      public id: number,
      public name: string,
      public category: string,
      public link: string,
      public notes?: string,
      public img?: string,
    ) {  }
}
