export class CV {
  public title: string;
  public company: string;
  public time: string;
  public description: string;

  constructor(
    title: string,
    company: string,
    time: string,
    description: string
  ) {
    this.title = title;
    this.company = company;
    this.time = time;
    this.description = description;
  }
}
