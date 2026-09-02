const startButton =
  document.querySelector("#start-button");

const restartButton =
  document.querySelector("#restart-button");

const startScreen =
  document.querySelector("#start-screen");

const quizScreen =
  document.querySelector("#quiz-screen");

const resultScreen =
  document.querySelector("#result-screen");

const progress =
  document.querySelector("#progress");

const questionText =
  document.querySelector("#question-text");

const answersContainer =
  document.querySelector("#answers");

const resultTitle =
  document.querySelector("#result-title");

const resultDescription =
  document.querySelector("#result-description");

const resultSymptoms =
  document.querySelector("#result-symptoms");

const resultPhilosophers =
  document.querySelector("#result-philosophers");

const recommendations =
  document.querySelector("#recommendations");

const certificateNumber =
  document.querySelector("#certificate-number");


let scores = {
  existential: 0,
  skeptic: 0,
  political: 0,
  moral: 0,
  rationalist: 0,
  metaphysical: 0
};

let currentQuestion = 0;

let finalAnswerType = null;


const questions = [

  {
    question:
      "You discover that everything you believe might be wrong. What do you do?",

    answers: [

      {
        text:
          "Excellent. Let’s doubt absolutely everything.",
        type:
          "skeptic"
      },

      {
        text:
          "But what does this mean for how I should live?",
        type:
          "existential"
      },

      {
        text:
          "Who taught me these beliefs, and who benefits?",
        type:
          "political"
      },

      {
        text:
          "First we need to define what “wrong” actually means.",
        type:
          "rationalist"
      }

    ]
  },


  {
    question:
      "Someone tells you morality is entirely subjective. Your immediate response?",

    answers: [

      {
        text:
          "That sounds suspiciously convenient.",
        type:
          "moral"
      },

      {
        text:
          "What evidence would actually establish that?",
        type:
          "skeptic"
      },

      {
        text:
          "Who gets to decide which moral rules become normal?",
        type:
          "political"
      },

      {
        text:
          "Before anything else: what exactly is a moral fact?",
        type:
          "metaphysical"
      }

    ]
  },


  {
    question:
      "It is 2:17 a.m. Your brain has decided sleep is less important than investigating something. What is it?",

    answers: [

      {
        text:
          "Whether I am actually choosing my life or merely performing it.",
        type:
          "existential"
      },

      {
        text:
          "Whether consciousness can possibly be reduced to physical processes.",
        type:
          "metaphysical"
      },

      {
        text:
          "Whether my argument from six hours ago was logically consistent.",
        type:
          "rationalist"
      },

      {
        text:
          "Whether I accidentally did something morally indefensible in 2018.",
        type:
          "moral"
      }

    ]
  },


  {
    question:
      "A confident person says, “Everyone knows that.” What happens inside you?",

    answers: [

      {
        text:
          "My eyebrow rises involuntarily. Citation, please.",
        type:
          "skeptic"
      },

      {
        text:
          "I want the definition of “everyone” immediately.",
        type:
          "rationalist"
      },

      {
        text:
          "I become interested in how that belief became socially compulsory.",
        type:
          "political"
      },

      {
        text:
          "I wonder whether anyone actually knows anything, including me.",
        type:
          "existential"
      }

    ]
  },


  {
    question:
      "You are given absolute political power for one day. Your first instinct?",

    answers: [

      {
        text:
          "Investigate why anyone thought giving me absolute power was acceptable.",
        type:
          "political"
      },

      {
        text:
          "Create rules preventing myself from abusing it.",
        type:
          "moral"
      },

      {
        text:
          "Determine whether authority can ever be rationally justified.",
        type:
          "rationalist"
      },

      {
        text:
          "Become concerned that power may alter who I am.",
        type:
          "existential"
      }

    ]
  },


  {
    question:
      "Which sentence is most likely to ruin an otherwise pleasant afternoon for you?",

    answers: [

      {
        text:
          "You cannot prove that the future will resemble the past.",
        type:
          "skeptic"
      },

      {
        text:
          "Your identity may be nothing more than a continuously changing process.",
        type:
          "metaphysical"
      },

      {
        text:
          "A good intention can still produce a morally terrible outcome.",
        type:
          "moral"
      },

      {
        text:
          "The system survives partly because ordinary people keep cooperating with it.",
        type:
          "political"
      }

    ]
  },


  {
    question:
      "Someone asks you a simple philosophical question. What is your worst habit?",

    answers: [

      {
        text:
          "I refuse to answer until we define every important word.",
        type:
          "rationalist"
      },

      {
        text:
          "I question whether the premise is knowable in the first place.",
        type:
          "skeptic"
      },

      {
        text:
          "I somehow turn it into a crisis about freedom, death, or meaning.",
        type:
          "existential"
      },

      {
        text:
          "I somehow end up asking whether reality itself contains the thing we are discussing.",
        type:
          "metaphysical"
      }

    ]
  },


  {
    question:
      "Choose the intellectual disaster you would most willingly invite into your home.",

    answers: [

      {
        text:
          "Discovering that certainty is mostly a luxury item.",
        type:
          "skeptic"
      },

      {
        text:
          "Discovering that freedom comes with horrifying amounts of responsibility.",
        type:
          "existential"
      },

      {
        text:
          "Discovering that obedience may be doing more political work than force.",
        type:
          "political"
      },

      {
        text:
          "Discovering that being a good person requires far more thinking than advertised.",
        type:
          "moral"
      }

    ]
  }

];


const results = {

  existential: {

    title:
      "THE EXISTENTIAL DISASTER",

    description:
      "You are less interested in whether life has an instruction manual than in why nobody warned you that you would have to write it yourself.",

    symptoms:
      "Sudden suspicion that every ordinary decision is secretly a referendum on who you are becoming.",

    philosophers:
      "Jean-Paul Sartre, Simone de Beauvoir, Albert Camus",

    books: [

      {
        title:
          "Being and Nothingness — Jean-Paul Sartre",

        url:
          "https://meixisbookshelf.wordpress.com/existential-despair/"
      },

      {
        title:
          "The Ethics of Ambiguity — Simone de Beauvoir",

        url:
          "https://meixisbookshelf.wordpress.com/existential-despair/"
      },

      {
        title:
          "The Trouble with Being Born — Emil Cioran",

        url:
          "https://meixisbookshelf.wordpress.com/existential-despair/"
      }

    ]
  },


  skeptic: {

    title:
      "THE SKEPTIC",

    description:
      "You trust evidence reluctantly and certainty even less. Claims enter your mind only after completing an unnecessarily hostile customs inspection.",

    symptoms:
      "Uncontrolled eyebrow raising when someone says “obviously,” “everyone knows,” or “it’s just common sense.”",

    philosophers:
      "David Hume, Sextus Empiricus, Karl Popper",

    books: [

      {
        title:
          "An Enquiry Concerning Human Understanding — David Hume",

        url:
          "https://meixisbookshelf.wordpress.com/epistemic-irritation/#david-hume"
      },

      {
        title:
          "Theaetetus — Plato",

        url:
          "https://meixisbookshelf.wordpress.com/epistemic-irritation/"
      },

      {
        title:
          "Against Method — Paul Feyerabend",

        url:
          "https://meixisbookshelf.wordpress.com/epistemic-irritation/"
      }

    ]
  },


  political: {

    title:
      "THE POLITICAL DISSIDENT",

    description:
      "You have difficulty encountering a rule without immediately wondering who wrote it, who profits from it, and why everyone else agreed to behave.",

    symptoms:
      "Persistent inability to hear the phrase “that’s just how things work” without mentally preparing a cross-examination.",

    philosophers:
      "Étienne de La Boétie, John Stuart Mill, Hannah Arendt",

    books: [

      {
        title:
          "Discourse on Voluntary Servitude — Étienne de La Boétie",

        url:
          "https://meixisbookshelf.wordpress.com/political-disobedience/"
      },

      {
        title:
          "On Liberty — John Stuart Mill",

        url:
          "https://meixisbookshelf.wordpress.com/political-disobedience/"
      },

      {
        title:
          "The Concept of the Political — Carl Schmitt",

        url:
          "https://meixisbookshelf.wordpress.com/political-disobedience/"
      }

    ]
  },


  moral: {

    title:
      "THE MORAL OVERTHINKER",

    description:
      "Other people make decisions. You conduct an internal ethics committee hearing and invite several philosophers who despise one another.",

    symptoms:
      "Retrospective moral analysis of conversations nobody else remembers.",

    philosophers:
      "Aristotle, Immanuel Kant, Derek Parfit",

    books: [

      {
        title:
          "Nicomachean Ethics — Aristotle",

        url:
          "https://meixisbookshelf.wordpress.com/moral-indecision/"
      },

      {
        title:
          "Groundwork of the Metaphysics of Morals — Immanuel Kant",

        url:
          "https://meixisbookshelf.wordpress.com/moral-indecision/"
      },

      {
        title:
          "Reasons and Persons — Derek Parfit",

        url:
          "https://meixisbookshelf.wordpress.com/moral-indecision/"
      }

    ]
  },


  rationalist: {

    title:
      "THE RATIONALIST",

    description:
      "You believe many human disasters could be improved considerably if everyone would stop talking for three minutes and define their terms.",

    symptoms:
      "Compulsive distinction-making and an alarming intolerance for arguments that change definitions halfway through.",

    philosophers:
      "René Descartes, Gottfried Wilhelm Leibniz, Bertrand Russell",

    books: [

      {
        title:
          "The Problems of Philosophy — Bertrand Russell",

        url:
          "https://meixisbookshelf.wordpress.com/metaphysical-confusion/"
      },

      {
        title:
          "Critique of Pure Reason — Immanuel Kant",

        url:
          "https://meixisbookshelf.wordpress.com/metaphysical-confusion/"
      },

      {
        title:
          "Naming and Necessity — Saul Kripke",

        url:
          "https://meixisbookshelf.wordpress.com/metaphysical-confusion/"
      }

    ]
  },


  metaphysical: {

    title:
      "THE METAPHYSICAL MENACE",

    description:
      "Reality was perfectly serviceable before you started asking what it was made of, whether identity persists through time, and why consciousness exists at all.",

    symptoms:
      "Turning harmless nouns such as “self,” “time,” and “object” into three-hour emergencies.",

    philosophers:
      "David Chalmers, Saul Kripke, Gottfried Wilhelm Leibniz",

    books: [

      {
        title:
          "The Conscious Mind — David Chalmers",

        url:
          "https://meixisbookshelf.wordpress.com/consciousness-other-mysteries/"
      },

      {
        title:
          "The Monadology — Gottfried Wilhelm Leibniz",

        url:
          "https://meixisbookshelf.wordpress.com/metaphysical-confusion/"
      },

      {
        title:
          "Being No One — Thomas Metzinger",

        url:
          "https://meixisbookshelf.wordpress.com/consciousness-other-mysteries/"
      }

    ]
  }

};


startButton.addEventListener(
  "click",
  function () {

    resetScores();

    currentQuestion = 0;

    finalAnswerType = null;

    startScreen.style.display =
      "none";

    resultScreen.style.display =
      "none";

    quizScreen.style.display =
      "block";

    showQuestion();

  }
);


function showQuestion() {

  const current =
    questions[currentQuestion];

  progress.textContent =
    "QUESTION " +
    (currentQuestion + 1) +
    " OF " +
    questions.length;

  quizScreen.classList.remove(
    "reveal-screen"
  );

  void quizScreen.offsetWidth;

  quizScreen.classList.add(
    "reveal-screen"
  );

  questionText.textContent =
    current.question;

  answersContainer.innerHTML =
    "";

  const letters =
    ["A", "B", "C", "D"];

  current.answers.forEach(
    function (answer, index) {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "answer";

      button.textContent =
        answer.text;

      button.dataset.letter =
        letters[index];

      button.addEventListener(
        "click",
        function () {

          scores[answer.type] += 2;

          finalAnswerType =
            answer.type;

          currentQuestion++;

          if (
            currentQuestion <
            questions.length
          ) {

            showQuestion();

          } else {

            showResult();

          }

        }
      );

      answersContainer.appendChild(
        button
      );

    }
  );

}


function findWinningType() {

  let highestScore =
    -1;

  let winners =
    [];

  for (const type in scores) {

    if (
      scores[type] >
      highestScore
    ) {

      highestScore =
        scores[type];

      winners =
        [type];

    }

    else if (
      scores[type] ===
      highestScore
    ) {

      winners.push(
        type
      );

    }

  }

  if (
    winners.length > 1 &&
    winners.includes(
      finalAnswerType
    )
  ) {

    return finalAnswerType;

  }

  return winners[0];

}


function showResult() {

  quizScreen.style.display =
    "none";

  resultScreen.style.display =
    "block";

  resultScreen.classList.remove(
    "reveal-screen"
  );

  void resultScreen.offsetWidth;

  resultScreen.classList.add(
    "reveal-screen"
  );

  const winningType =
    findWinningType();

  const result =
    results[winningType];

  resultTitle.textContent =
    result.title;

  resultDescription.textContent =
    result.description;

  resultSymptoms.textContent =
    result.symptoms;

  resultPhilosophers.textContent =
    result.philosophers;

  const caseNumber =
    String(
      Math.floor(
        Math.random() * 90000
      ) + 10000
    );

  certificateNumber.textContent =
    "#" + caseNumber;

  recommendations.innerHTML =
    "";

  result.books.forEach(
    function (book) {

      const link =
        document.createElement(
          "a"
        );

      link.className =
        "book-link";

      link.textContent =
        book.title;

      link.href =
        book.url;

      recommendations.appendChild(
        link
      );

    }
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


restartButton.addEventListener(
  "click",
  function () {

    resetScores();

    currentQuestion = 0;

    finalAnswerType = null;

    resultScreen.style.display =
      "none";

    quizScreen.style.display =
      "none";

    startScreen.style.display =
      "block";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


function resetScores() {

  scores = {
    existential: 0,
    skeptic: 0,
    political: 0,
    moral: 0,
    rationalist: 0,
    metaphysical: 0
  };

}


/* DESKTOP CURSOR GLOW */

document.addEventListener(
  "mousemove",
  function (event) {

    const x =
      event.clientX + "px";

    const y =
      event.clientY + "px";

    document.body.style.setProperty(
      "--mouse-x",
      x
    );

    document.body.style.setProperty(
      "--mouse-y",
      y
    );

  }
);
