import categoryData from "./categoryData";

/**FAQ Data
 * FAQ Questions and answers
 * Section: { question: string
 *            answer: string
 *            bullets: [strings] //bullet points for ul (optional)
 *            links: [{href: string, text: string, linkText: string}] //link with href, text, and link text (optional)
 *            images: [{desc: string, src: string }] //images with description/title and src (optional)
 * }
 */

const faqData = {
  "1RM": [
    {
      question: "What is a one-rep max (1RM)?",
      answer:
        "A one-rep max is the maximum amount of weight you can lift for a single repetition of a given exercise through a full range of motion with proper technique."
    },
    {
      question: "Is the calculation accurate?",
      answer:
        "It's very close, but only if you honestly report the weight lifted, number of reps, and performed the lift correctly. If you cheat the range of motion (e.g., half/quarter squats, super-wide bench grip) or use improper technique (e.g., pressing with knee push, bouncing deadlifts), the calculation is no good because you're feeding it tainted data.",
      links: [
        {
          href:
            "https://www.amazon.com/Starting-Strength-Basic-Barbell-Training/dp/0982522738/ref=sr_1_1?crid=3UJ11XU5VOIFS&keywords=starting+strength&qid=1552420903&s=gateway&sprefix=starting%2Caps%2C163&sr=8-1",
          text: "For information on proper technique for the main compound lifts, read Mark Rippetoe's ",
          linkText: "Starting Strength: Basic Barbell Training."
        }
      ]
    },
    {
      question: "Why calculate my 1RM?",
      answer: "1RM is useful for several reasons:",
      bullets: [
        "It gives you a standard number to compare your progress to benchmark performance standards.",
        "It gives you a standard number to estimate how much weight you can lift in different rep ranges.",
        "It allows you to keep track of your progress when periodizing rep ranges."
      ]
    },
    {
      question: "What which rep range is best for calculating a 1RM?",
      answer: "Reps of 10 or fewer are best for accuracy, and between 3 to 6 is ideal."
    },
    {
      question: "Why different formulas? Is there a best forumla?",
      answer:
        'Eight of the most popular formulas have been provided because there is no "best" formula. Different people find different formulas represent their capabilities and performance more accurately than others. Finding which formula works best for you is really a matter of trial and error.\n \n The default is an average of all formulas to give a reasonable middle-ground. Brzycki is the most conservative estimate and Mayhew the most generous; if you want to play it safe, go with Brzycki.\n \n If you are new to lifting, use Brzycki because you are not proficient in the lifts yet and your neuromuscular system is not highly adapted yet, so your one-rep max will not be as high comparatively as a seasoned lifter.'
    },
    {
      question: "What are estimated weights for rep ranges?",
      answer:
        "This is a fairly accurate estimation of how much weight you can lift for a given number of reps. The calculation is based off a percentage of your 1RM. A range is given for wiggle room to reflect the different formulas commonly used."
    }
  ],
  Benchmarks: [
    {
      question: "What are one-rep-max (1RM) benchmarks?",
      answer:
        "1RM benchmarks reflect the reasonably expected level of strength in a healthy individual at various training levels."
    },
    {
      question: "Where do these benchmarks come from?",
      answer:
        "Data comes from Mark Rippetoe and Dr. Lon Kilgore, courtesy of Starting Strength. Their numbers are based on decades of expereince training lifters of all skill levels and genetic potential.",
      links: [
        {
          href: "https://startingstrength.com/files/standards.pdf",
          text: "Original Charts from",
          linkText: "Starting Strength"
        }
      ]
    },
    {
      question: "Which lifts are covered?",
      answer: "The five main compound lifts covered in the benchmark data (all free weights with Olympic barbells): ",
      bullets: [
        "Squat: low-bar back squat to just below parallel",
        "Deadlift: full lift from 'dead' barbell on the floor with traditional narrow stance",
        "Bench Press: full bench from chest to top with forearms in vertical parallel at bottom position",
        "Overhead Press: standing press with bar in front with no assistance from legs",
        "Power Clean: full clean from the from the floor and racking on the shoulders"
      ],
      links: [
        {
          href:
            "https://www.amazon.com/Starting-Strength-Basic-Barbell-Training/dp/0982522738/ref=sr_1_1?crid=3UJ11XU5VOIFS&keywords=starting+strength&qid=1552420903&s=gateway&sprefix=starting%2Caps%2C163&sr=8-1",
          text: "For information on proper technique for the main compound lifts, read Mark Rippetoe's ",
          linkText: "Starting Strength: Basic Barbell Training."
        }
      ]
    },
    {
      question: "What are the benchmark performance categories?",
      answer: "There are five categories representing broad levels of training and experience: ",
      bullets: [
        "Untrained: " + categoryData[0].desc,
        "Novice: " + categoryData[1].desc,
        "Intermediate: " + categoryData[2].desc,
        "Advanced: " + categoryData[3].desc,
        "Elite: " + categoryData[4].desc
      ]
    },
    {
      question: "Should I be hitting the benchmarks for all my lifts?",
      answer:
        "Not necessarily. Benchmarks are not standard norms that everyone who trains correctly reaches, nor reaches in similar time-frames. Take them with a huge grain of salt because there are a variety of factors and considerations:",
      bullets: [
        "You are limited by your genetic potential. Some people are genetic freaks and can get ridiculously strong. Most of us will never attain record-setting levels of strength.",
        "Age plays a major role in how much of your genetic potential you can reach. The younger you are, the easier it will be to get stronger faster and fulfill your potential. The older you are, the harder and slower it will be and chances are you won't reach your full genetic potential.",
        "Skeletal anatomy affects your performance for each lift: it can make you naturally at better at some lifts and others more challenging. It's not uncommon to progress quicker on some lifts and slower on others.",
        "Life can get in the way. You can get setback by physical or mental illness, vacation, or any unplanned/unexpected absence from training."
      ],
      links: [
        {
          href: "https://www.muscleforlife.com/strength-standards/",
          text: "For more information on benchmark standards, check out Muscle For Life's article on ",
          linkText: "Strength Standards"
        },
        {
          href:
            "https://www.amazon.com/Practical-Programming-Strength-Training-Rippetoe/dp/0982522754/ref=sr_1_1?crid=2J4ME6MGS8F8R&keywords=practical+programming+for+strength+training+3rd+edition&qid=1552432321&s=gateway&sprefix=practical+pro%2Caps%2C163&sr=8-1",
          text: "For more information on the science of strength and potential, read Mark Rippetoe and Andy Baker's ",
          linkText: "Practical Programming for Strength Training"
        }
      ]
    }
  ],
  Formulas: [
    {
      question: "How do the one-rep-max (1RM) formulas work?",
      answer:
        "All formulas are predictions based off submaximal estimation, i.e., they predict how much weight you can lift for one rep based off how much weight you lifted for a number of multiple reps. Submaximal means any weight below your one-rep max."
    },
    {
      question: "Why different formulas? Is there a best forumla?",
      answer:
        'Eight of the most popular formulas have been provided because there is no "best" formula. Different people find different formulas represent their capabilities and performance more accurately than others. Finding which formula works best for you is really a matter of trial and error.\n \n The default is an average of all formulas to give a reasonable middle-ground. Brzycki is the most conservative estimate and Mayhew the most generous; if you want to play it safe, go with Brzycki.\n \n If you are new to lifting, use Brzycki because you are not proficient in the lifts yet and your neuromuscular system is not highly adapted yet, so your one-rep max will not be as high comparatively as a seasoned lifter.'
    },
    {
      question: "Equations",
      answer: 'In the formulas, "r" represents reps performed and "w" weight lifted: ',
      images: [
        {
          desc: "Brzycki",
          src: "../../assets/images/formula_brzycki_cropped.svg"
        },
        {
          desc: "Epley",
          src: "../../assets/images/formula_epley_cropped.svg"
        },
        {
          desc: "Baechle",
          src: "../../assets/images/formula_baechle_cropped.svg"
        },
        {
          desc: "Lander",
          src: "../../assets/images/formula_lander_cropped.svg"
        },
        {
          desc: "O'Conner",
          src: "../../assets/images/formula_oconner_cropped.svg"
        },
        {
          desc: "Lombardi",
          src: "../../assets/images/formula_lombardi_cropped.svg"
        },
        {
          desc: "Mayhew",
          src: "../../assets/images/formula_mayhew_cropped.svg"
        },
        {
          desc: "Wathan",
          src: "../../assets/images/formula_wathan_cropped.svg"
        }
      ]
    }
  ]
};

export default faqData;
