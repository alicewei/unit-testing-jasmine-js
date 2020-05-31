import { ModuleFunc } from './module';

const moduleFunc = new ModuleFunc([], [], [], [], [], {}, {});

const imagine = ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'];
const somewhere_over_the_rainbow = ['c', 'em', 'f', 'g', 'am'];
const tooManyCooks = ['c', 'g', 'f'];
const iWillFollowYouIntoTheDark = ['f', 'dm', 'bb', 'c', 'a', 'bbm'];
const babyOneMoreTime = ['cm', 'g', 'bb', 'eb', 'fm', 'ab'];
const creep = ['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'];
const army = ['ab', 'ebm7', 'dbadd9', 'fm7', 'bbm', 'abmaj7', 'ebm'];
const paperBag = ['bm7', 'e', 'c', 'g', 'b7', 'f', 'em', 'a', 'cmaj7', 'em7', 'a7', 'f7', 'b'];
const toxic = ['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7', 'g7'];
const bulletproof = ['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'];

moduleFunc.train(imagine, 'easy');
moduleFunc.train(somewhere_over_the_rainbow, 'easy');
moduleFunc.train(tooManyCooks, 'easy');
moduleFunc.train(iWillFollowYouIntoTheDark, 'medium');
moduleFunc.train(babyOneMoreTime, 'medium');
moduleFunc.train(creep, 'medium');
moduleFunc.train(paperBag, 'hard');
moduleFunc.train(toxic, 'hard');
moduleFunc.train(bulletproof, 'hard');

moduleFunc.setLabelProbabilities();
moduleFunc.setChordCountsInLabels();
moduleFunc.setProbabilityOfChordsInLabels();

moduleFunc.classify(['d', 'g', 'e', 'dm']);
moduleFunc.classify(['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m']);