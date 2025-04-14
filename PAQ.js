  /* 
  ===============================================================
  =                    SURVEY PROCEDURE                    =
  ===============================================================
  */


/**
 ********** Perth Alexithymia Questionnaire (PAQ); Preece et al. 2018 **********
 */


    var likert_scale = [
      "1 (Strongly disagree)",
      "2",
      "3",
      "4 (Neither agree nor disagree)",
      "5",
      "6",
      "7 (Strongly agree)"
    ];

    
    var PAQ = {
      type: jsPsychSurveyLikert,
      preamble: '<p>Please indicate your agreement with the following statements about your ability to understand or describe your feelings. Use a 7‐point scale where “1” indicates complete disagreement and “7” indicates complete agreement.</p>',
      questions: [
        {
          prompt: "1. When I&apos;m feeling bad (feeling an unpleasant emotion), I can&apos;t find the right words to describe those feelings.",
          labels: likert_scale,
          name: 'Q1',
          required: true
        },
        {
          prompt: "2. When I&apos;m feeling bad, I can&apos;t tell whether I&apos;m sad, angry, or scared.",
          labels: likert_scale,
          name: 'Q2',
          required: true
        },
        {
          prompt: "3. I tend to ignore how I feel.",
          labels: likert_scale,
          name: 'Q3',
          required: true
        },
        {
          prompt: "4. When I&apos;m feeling good (feeling a pleasant emotion), I can&apos;t find the right words to describe those feelings.",
          labels: likert_scale,
          name: 'Q4',
          required: true
        },
        {
          prompt: "5. When I&apos;m feeling good, I can&apos;t tell whether I&apos;m happy, excited, or amused.",
          labels: likert_scale,
          name: 'Q5',
          required: true
        },
        {
          prompt: "6. I prefer to just let my feelings happen in the background, rather than focus on them.",
          labels: likert_scale,
          name: 'Q6',
          required: true
        },
        {
          prompt: "7. When I&apos;m feeling bad, I can&apos;t talk about those feelings in much depth or detail.",
          labels: likert_scale,
          name: 'Q7',
          required: true
        },
        {
          prompt: "8. When I&apos;m feeling bad, I can&apos;t make sense of those feelings.",
          labels: likert_scale,
          name: 'Q8',
          required: true
        },
        {
          prompt: "9. I don&apos;t pay attention to my emotions.",
          labels: likert_scale,
          name: 'Q9',
          required: true
        },
        {
          prompt: "10. When I&apos;m feeling good, I can&apos;t talk about those feelings in much depth or detail.",
          labels: likert_scale,
          name: 'Q10',
          required: true
        },
        {
          prompt: "11. When I&apos;m feeling good, I can&apos;t make sense of those feelings.",
          labels: likert_scale,
          name: 'Q11',
          required: true
        },
        {
          prompt: "12. Usually, I try to avoid thinking about what I&apos;m feeling.",
          labels: likert_scale,
          name: 'Q12',
          required: true
        },
        {
          prompt: "13. When something bad happens, it&apos;s hard for me to put into words how I&apos;m feeling.",
          labels: likert_scale,
          name: 'Q13',
          required: true
        },
        {
          prompt: "14. When I&apos;m feeling bad, I get confused about what emotion it is.",
          labels: likert_scale,
          name: 'Q14',
          required: true
        },
        {
          prompt: "15. I prefer to focus on things I can actually see or touch, rather than my emotions.",
          labels: likert_scale,
          name: 'Q15',
          required: true
        },
        {
          prompt: "16. When something good happens, it&apos;s hard for me to put into words how I&apos;m feeling.",
          labels: likert_scale,
          name: 'Q16',
          required: true
        },
        {
          prompt: "17. When I&apos;m feeling good, I get confused about what emotion it is.",
          labels: likert_scale,
          name: 'Q17',
          required: true
        },
        {
          prompt: "18. I don&apos;t try to be ‘in touch&apos; with my emotions.",
          labels: likert_scale,
          name: 'Q18',
          required: true
        },
        {
          prompt: "19. When I&apos;m feeling bad, if I try to describe how I&apos;m feeling I don&apos;t know what to say.",
          labels: likert_scale,
          name: 'Q19',
          required: true
        },
        {
          prompt: "20. When I&apos;m feeling bad, I&apos;m puzzled by those feelings.",
          labels: likert_scale,
          name: 'Q20',
          required: true
        },
        {
          prompt: "21. It&apos;s not important for me to know what I&apos;m feeling.",
          labels: likert_scale,
          name: 'Q21',
          required: true
        },
        {
          prompt: "22. When I&apos;m feeling good, if I try to describe how I&apos;m feeling I don&apos;t know what to say.",
          labels: likert_scale,
          name: 'Q22',
          required: true
        },
        {
          prompt: "23. When I&apos;m feeling good, I&apos;m puzzled by those feelings.",
          labels: likert_scale,
          name: 'Q23',
          required: true
        },
        {
          prompt: "24. It&apos;s strange for me to think about my emotions.",
          labels: likert_scale,
          name: 'Q24',
          required: true
        }
      ]
    };





