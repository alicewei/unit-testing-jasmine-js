class ModuleFunc {

    constructor(
        songs = [],
        labels = [],
        allChords = [],
        labelCounts = [],
        labelProbabilities = [],
        chordCountsInLabels = {},
        probabilityOfChordsInLabels = {}
    ) {
        this.songs = songs;
        this.labels = labels;
        this.allChords = allChords;
        this.labelCounts = labelCounts;
        this.labelProbabilities = labelProbabilities;
        this.chordCountsInLabels = chordCountsInLabels;
        this.probabilityOfChordsInLabels = probabilityOfChordsInLabels;
    }

    train(chords, label) {
        this.songs.push([label, chords]);
        this.labels.push(label);
        for (var i = 0; i < chords.length; i++) {
            if (!this.allChords.includes(chords[i])) {
                this.allChords.push(chords[i]);
            }
            if (!!(Object.values(this.labelCounts).includes(label))) {
                this.labelCounts[i] = this.labelCounts + 1;
            } else {
                this.labelCounts[i] = 1;
            }
        }
    }

    getNumberOfSongs() {
        return this.songs.length;
    }

    setLabelProbabilities() {
        Object.keys(this.labelCounts).forEach((label) => {
            let numberOfSongs = this.getNumberOfSongs();
            this.labelProbabilities[label] = this.labelCounts[label] / numberOfSongs;
        });
    }

    setChordCountsInLabels() {
        this.songs.forEach((i) => {
            if (this.chordCountsInLabels[i[0]] === undefined) {
                this.chordCountsInLabels[i[0]] = {};
            }
            i[1].forEach((j) => {
                if (this.chordCountsInLabels[i[0]][j] > 0) {
                    this.chordCountsInLabels[i[0]][j] = this.chordCountsInLabels[i[0]][j] + 1;
                } else {
                    this.chordCountsInLabels[i[0]][j] = 1;
                }
            });
        });
    }

    setProbabilityOfChordsInLabels() {
        this.probabilityOfChordsInLabels = this.chordCountsInLabels;
        Object.keys(this.probabilityOfChordsInLabels).forEach((i) => {
            Object.keys(this.probabilityOfChordsInLabels[i]).forEach((j) => {
                this.probabilityOfChordsInLabels[i][j] = this.probabilityOfChordsInLabels[i][j] * 1.0 / this.songs.length;
            });
        });
    }

    classify(chords) {
        let ttal = this.labelProbabilities;
        let classified = {};
        Object.keys(ttal).forEach((obj) => {
            let first = this.labelProbabilities[obj] + 1.01;

            chords.forEach((chord) => {
                let probabilityOfChordInLabel;
                // let probabilityOfChordInLabel = this.probabilityOfChordsInLabels[obj][chord];
                // Cannot read property [obj] of undefined

                if (probabilityOfChordInLabel === undefined) {
                    first + 1.01;
                } else {
                    first = first * (probabilityOfChordInLabel + 1.01);
                }
            });
            classified[obj] = first;
        });
    }
}

export { ModuleFunc }