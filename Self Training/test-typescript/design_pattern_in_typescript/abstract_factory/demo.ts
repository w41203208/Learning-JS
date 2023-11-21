import {
  AbstractFactory,
  Tester,
  StoryFactory,
  ComicFactory,
} from './abstractFactory';

export function show() {
  var m_StoryFactory: AbstractFactory = new StoryFactory();
  var tester1: Tester = new Tester(m_StoryFactory);
  tester1.test();

  var m_ComicFactory: AbstractFactory = new ComicFactory();
  var tester2: Tester = new Tester(m_ComicFactory);
  tester2.test();
}
