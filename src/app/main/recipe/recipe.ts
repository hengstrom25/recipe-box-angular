export class Recipe {

    constructor(
      public name: string,
      public type: string,
      public link: string,
      public notes?: string,
      public img?: string,
    ) {  }
}
