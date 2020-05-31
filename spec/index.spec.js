import { ModuleFunc } from '../src/module.js';

const moduleFunc = new ModuleFunc();

describe('start test suit', () => {
let imagine,
	somewhere_over_the_rainbow,
	tooManyCooks,
	iWillFollowYouIntoTheDark,
	babyOneMoreTime,
	creep,
	army,
	paperBag,
	toxic,
	bulletproof,
	song_11;

beforeEach(() => {
	// songs
	imagine = ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'];
	somewhere_over_the_rainbow = ['c', 'em', 'f', 'g', 'am'];
	tooManyCooks = ['c', 'g', 'f'];
	iWillFollowYouIntoTheDark = ['f', 'dm', 'bb', 'c', 'a', 'bbm'];
	babyOneMoreTime = ['cm', 'g', 'bb', 'eb', 'fm', 'ab'];
	creep = ['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'];
	army = ['ab', 'ebm7', 'dbadd9', 'fm7', 'bbm', 'abmaj7', 'ebm'];
	paperBag = ['bm7', 'e', 'c', 'g', 'b7', 'f', 'em', 'a', 'cmaj7', 'em7', 'a7', 'f7', 'b'];
	toxic = ['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7', 'g7'];
	bulletproof = ['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'];
});

it('test: has parameter', () => {
	expect(moduleFunc.songs).toEqual([]);
	expect(moduleFunc.labels).toEqual([]);
	expect(moduleFunc.allChords).toEqual([]);
	expect(moduleFunc.labelCounts).toEqual([]);
	expect(moduleFunc.labelProbabilities).toEqual([]);
	expect(moduleFunc.chordCountsInLabels).toEqual({});
	expect(moduleFunc.probabilityOfChordsInLabels).toEqual({});
});

it('test: function train', () => {
	moduleFunc.train(imagine, 'easy');
	moduleFunc.train(somewhere_over_the_rainbow, 'easy');
	moduleFunc.train(tooManyCooks, 'easy');
	moduleFunc.train(iWillFollowYouIntoTheDark, 'medium');
	moduleFunc.train(babyOneMoreTime, 'medium');
	moduleFunc.train(creep, 'medium');
	moduleFunc.train(paperBag, 'hard');
	moduleFunc.train(toxic, 'hard');
	moduleFunc.train(bulletproof, 'hard');

	expect(moduleFunc.songs.length).toBe(9);
	expect(moduleFunc.allChords.length).toBe(37);
	expect(moduleFunc.allChords).toEqual(["c", "cmaj7", "f", "am", "dm", "g", "e7", "em", "bb", "a", "bbm", "cm", "eb", "fm", "ab", "gsus4", "b", "bsus4", "cmsus4", "cm6", "bm7", "e", "b7", "em7", "a7", "f7", "cdim", "eb7", "d7", "db7", "gmaj7", "g7", "d#m", "g#", "f#", "g#m", "c#"]);
	expect(moduleFunc.labels.length).toBe(9);
	expect(moduleFunc.labels[8]).toBe('hard');
	expect(moduleFunc.labels).toEqual(["easy", "easy", "easy", "medium", "medium", "medium", "hard", "hard", "hard"]);
});

it('test: function setLabelProbabilities', () => {
	moduleFunc.setLabelProbabilities();
	expect(moduleFunc.labelProbabilities.length).toBe(13);
});

it('test: function setChordCountsInLabels', () => {
	moduleFunc.setChordCountsInLabels();
	expect(typeof moduleFunc.chordCountsInLabels).toEqual('object');
	let checkChordCountsInLabels = Object.keys(moduleFunc.chordCountsInLabels);
	expect(checkChordCountsInLabels).toEqual(["easy", "medium", "hard"]);
});

it('test: function setProbabilityOfChordsInLabels', () => {
	moduleFunc.setProbabilityOfChordsInLabels();
	expect(typeof moduleFunc.probabilityOfChordsInLabels).toEqual('object');
	let checkProbabilityOfChordsInLabels = Object.keys(moduleFunc.probabilityOfChordsInLabels);
	expect(checkProbabilityOfChordsInLabels).toEqual(["easy", "medium", "hard"]);
});

it('test: function classify', () => {
	const argsOne = ['d', 'g', 'e', 'dm'];
	const argsTwo = ['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m'];

	const spyObj = {
		classifyOne: () => moduleFunc.classify(argsOne),
		classifyTwo: () => moduleFunc.classify(argsTwo)
	};

	spyObj.classifyOne();
	spyObj.classifyTwo();

	spyOn(spyObj, 'classifyOne').withArgs(argsOne);
	spyOn(spyObj, 'classifyTwo').withArgs(argsTwo);

	expect(moduleFunc.classify(argsOne)).nothing();
	expect(moduleFunc.classify(argsTwo)).nothing();
});

});