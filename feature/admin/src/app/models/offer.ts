export class Offer {

  type: string;
  description: string;
  title: string;

  constructor(title: string, type: string, description: string) {
    this.type = type;
    this.title = title;
    this.description = description;
  }

  setType(type: string) {
    this.type = type;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setTitle(title: string) {
    this.title =title;
  }

  getType(): string {
    return this.type
  }

  getTitle(): string {
    return this.title
  }

  getDescription(): string {
    return this.description
  }

}

