import React, {useEffect} from 'react';

const CheckResults = (): JSX.Element => {
  useEffect(() => {
    const checkResultsButton = document.getElementById('checkquizres');
    checkResultsButton.addEventListener('click', () => {
      const answer = (i, m1, m2) => {
        const message = {
          'yes': m1,
          'no': m2,
          undefined: "Wasn't answered"
        }[(document.querySelector(`input[name=q${i}]:checked`) as HTMLInputElement)?.value];
        document.getElementById(`sqr${i}`).textContent = `${i}) ${message}`;
      }
      answer(1,
        "Yes, it's definitely possible",
        "Actually, It is possible"
      );
      answer(2,
        "Yes, it's possible, but it depends on underlying the system",
        "Actually, it is possible but it depends on the underlying system"
      );
      answer(3,
        "Yes, it's possible",
        "No, it is possible"
      );
      answer(4,
        "Yes, it's possible but almost impossible to reproduce and it depends on the underlying system",
        "It is possible but almost impossible to reproduce and it depends on the underlying system"
      );
      answer(5,
        "No, it's not possible, at least something is not possible",
        "Spot on, it's not possible!"
      );
      answer(6,
        "It is possible according to the documentation",
        "No, it is possible according to the documentation"
      );
    });
  }, []);

  return (
    <div style={{marginTop: "1.25em"}}>
      <button
        id="checkquizres"
        className="bg-blue-500 w-full text-white rounded-full p-2 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Check results
      </button>
      <div className="collapse" id="collapseExample">
        <div id="showquizres" className="well">
          <p id="sqr1"></p>
          <p id="sqr2"></p>
          <p id="sqr3"></p>
          <p id="sqr4"></p>
          <p id="sqr5"></p>
          <p id="sqr6"></p>
        </div>
      </div>
    </div>
  );
};

export default CheckResults;
