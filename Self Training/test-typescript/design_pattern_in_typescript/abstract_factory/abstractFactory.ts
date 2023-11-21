export interface Book {
  printBookName(): string;
}
export interface Pencil {
  printPencilNum(): number;
}

export interface AbstractFactory {
  createBook(param?: any): Book;
  createPencil(): Pencil;
}

//Book product
export class StoryBook implements Book {
  printBookName(): string {
    return 'This is a story book.';
  }
}
export class ComicBook implements Book {
  printBookName(): string {
    return 'This is a comic book.';
  }
}

//Pencil product
export class StoryPencil implements Pencil {
  printPencilNum(): number {
    return 2;
  }
}
export class ComicPencil implements Pencil {
  printPencilNum(): number {
    return 4;
  }
}

export class StoryFactory implements AbstractFactory {
  createBook(param?: any): Book {
    return new StoryBook();
  }
  createPencil(): Pencil {
    return new StoryPencil();
  }
}

export class ComicFactory implements AbstractFactory {
  createBook(param?: any): Book {
    return new ComicBook();
  }
  createPencil(): Pencil {
    return new ComicPencil();
  }
}

export class Tester {
  private book: Book;
  private pencil: Pencil;

  constructor(factory: AbstractFactory) {
    this.book = factory.createBook();
    this.pencil = factory.createPencil();
  }

  public test(): void {
    console.log(this.book.printBookName());
    console.log(this.pencil.printPencilNum());
  }
}
