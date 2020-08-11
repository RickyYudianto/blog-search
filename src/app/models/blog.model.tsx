import { Exclude, Expose } from 'class-transformer';

@Exclude()
export default class Blog {
  @Expose()
  public blogname: string = '';
  @Expose()
  public contents: string = '';
  @Expose()
  public datetime: string = '';
  @Expose()
  public thumbnail: string = '';
  @Expose()
  public title: string = '';
  @Expose()
  public url: string = '';
}
