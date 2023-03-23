import React, {useState,useEffect} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import '../barchart/Barchart.css';
import './Riskfactor.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Riskfactor = () => {
  const [ls, setLs] = useState("");
  const [is, setIs] = useState("");
  const [os, setOs] = useState("");
  const [TA, setTA] = useState(0);
  const [VF, setVF] = useState(0);
  const [BI, setBI] = useState(0);
  const [TI, setTI] = useState(0);

  function calcScore() {
    var TA = parseInt(document.getElementById('Threat').value) +
      parseInt(document.getElementById('motive').value) +
      parseInt(document.getElementById('opportunity').value) +
      parseInt(document.getElementById('size').value);
    var VF = parseInt(document.getElementById('eod').value) +
      parseInt(document.getElementById('eoe').value) +
      parseInt(document.getElementById('aware').value) +
      parseInt(document.getElementById('intrude').value) + 0;
      
      var LS = TA + VF;
      TA = (TA / 4).toFixed(3);
      setTA(TA)
      VF = (VF / 4).toFixed(3);
      setVF(VF);
      LS=(LS/8).toFixed(3);
      setLs(LS)
    var score_LS = 0;
    if (LS < 3) {
      document.getElementById('like_score').style.background = '#198754';
      score_LS = 0;
    }
    else if (LS >= 3 && LS < 6) {
      document.getElementById('like_score').style.background = '#ffc107';
      score_LS = 1;
    }
    else {
      document.getElementById('like_score').style.background = '#dc3545';
      score_LS = 2;
    }

    var TI = parseInt(document.getElementById('loc').value) +
      parseInt(document.getElementById('loi').value) +
      parseInt(document.getElementById('loa').value) +
      parseInt(document.getElementById('loacc').value);
    var BI = parseInt(document.getElementById('finan').value) +
      parseInt(document.getElementById('reput').value) +
      parseInt(document.getElementById('comply').value) +
      parseInt(document.getElementById('privacy').value) + 0;

    var IS = TI + BI;
    TI = (TI / 4).toFixed(3);
    setTI(TI);
    BI = (BI / 4).toFixed(3);
    setBI(BI);
    IS = (IS / 8).toFixed(3);
    setIs(IS)
    var score_IS = 0;
    if (IS < 3) {
      document.getElementById('impact_score').style.background = '#198754';
      score_IS = 2;
    }
    else if (IS >= 3 && IS < 6) {
      document.getElementById('impact_score').style.background = '#ffc107';
      score_IS = 1;
    }
    else {
      document.getElementById('impact_score').style.background = '#dc3545';
      score_IS = 0;
    }

    var matrix = [["Medium", "High", "Critical"], ["Low", "Medium", "High"], ["Note", "Low", "Medium"]];
    var final_score = matrix[score_IS][score_LS];
    setOs(final_score);
    if (final_score === "Note") {
      setOs("Note");
      document.getElementById('overall_score').style.background = 'lightgreen';
    }
    else if (final_score === "Low") {
      setOs("Low");
      document.getElementById('overall_score').style.background = "Yellow";
    }
    else if (final_score === "Medium") {
      setOs("Medium");
      document.getElementById('overall_score').style.background = "Orange";
    }
    else if (final_score === "High") {
      setOs("High");
      document.getElementById('overall_score').style.background = "Red";
    }
    else {
      setOs("Undefined");
      document.getElementById('overall_score').style.background = "Pink";
    }
  }
  useEffect(() => {
    const chartData = [TA, VF, TI, BI];
    const chartRef = document.getElementById("mychart").chartInstance;

    if (chartRef) {
      chartRef.data.datasets[0].data = chartData;
      chartRef.update();
    }
  }, [TA, VF, TI, BI]);

    
  return (
    <>
    <div className="container Chart__container">
        <div className="data__container">
    <Bar id='mychart'
            data={{
              labels: ["Threat Agent", "Vulnerability Factor", "Technical Impact", "Business Impact"],
              datasets: [
                {
                  label: "Threat Score",
                  data: [TA,VF,TI,BI],
                  // backgroundColor: ["	#5f9ea0", "	#5f9ea0", "	#5f9ea0", "	#5f9ea0"],
                  backgroundColor: ["	#dc143c", "	#5f9ea0", "	#ff69b4", "	#f0e68c"],
                  // borderColor: ["	#5f9ea0", "	#5f9ea0", "	#5f9ea0", "	#5f9ea0"],
                  borderColor: ["		#dc143c", "	#5f9ea0", "	#ff69b4", "	#f0e68c"],
                  borderWidth: 0.5,
                },
              ],
            }}
            height={400}
            width={400}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }}
          />
          </div>
          </div>
      <div className="riskfactor container">
        <div className="btn___container" >
          <h2>Overall Score</h2>
          <button id="overall_score" className="score__button"> {os}</button>
        </div>
        <div className="upperThreat">
          <div className="ThreatAgent">
            <h2>Threat Agent Factors</h2>
            <div className="row">
              <div className="Threat__head">Skill Level</div>
              <div className="Threat__option">
                <select id='Threat' className="form-control" onChange={calcScore}>
                  <option value="1" >No Technical Skills </option>
                  <option value="3" >Some Technical Skills</option>
                  <option value="5" >Advanced Computer User</option>
                  <option value="6" >Network And Programming Skills</option>
                  <option value="9" >Security Penetration Skills</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Threat__head">Motive</div>
              <div className="Threat__option" >
                <select id='motive' className="form-control" onChange={calcScore}>
                  <option value="1">Low Or No Reward</option>
                  <option value="4">Possible Reward </option>
                  <option value="9">High Reward </option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Threat__head">Opportunity</div>
              <div className="Threat__option">
                <select id='opportunity' className="form-control" onChange={calcScore}>
                  <option value="0">Full Access/Expensive Resources Required</option>
                  <option value="4">Special Access Or Resources Required</option>
                  <option value="7">Some Access Or Resources Required </option>
                  <option value="9">No Access Or Resources Required</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Threat__head">Size</div>
              <div className="Threat__option">
                <select id='size' className="form-control" onChange={calcScore}>
                  <option value="2">Developers</option>
                  <option value="2">System Administrators</option>
                  <option value="4">Intranet Users</option>
                  <option value="5">Partners</option>
                  <option value="6">Authenticated Users </option>
                  <option value="9">Anonymous Internet Users</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Vulnerability">
            <h2>Vulnerability Factors</h2>
            <div className="row">
              <div className="vulnerability__head">Ease of Discovery</div>
              <div className="Vulnerability__option">
                <select id='eod' className="form-control" onChange={calcScore} >
                  <option value="1">Practically impossible</option>
                  <option value="3">Difficult</option>
                  <option value="7">Easy</option>
                  <option value="9">Automated Tools available</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="vulnerability__head">Ease of Exploit</div>
              <div className="Vulnerability__option">
                <select id='eoe' className="form-control" onChange={calcScore} >
                  <option value="1">Theoretical</option>
                  <option value="3">Difficult</option>
                  <option value="5">Easy</option>
                  <option value="9">Automated Tools available</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="vulnerability__head">Awareness</div>
              <div className="Vulnerability__option">
                <select id='aware' className="form-control" onChange={calcScore} >
                  <option value="1">Unknown</option>
                  <option value="4">Hidden</option>
                  <option value="6">Obvious</option>
                  <option value="9">Public Knowledge</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="vulnerability__head">Intrusion Detection</div>
              <div className="Vulnerability__option">
                <select id='intrude' className="form-control" onChange={calcScore} >
                  <option value="1">Active Detection In Application</option>
                  <option value="4">Logged And Reviewed</option>
                  <option value="8">Logged Without Review</option>
                  <option value="9">Not Logged</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="btn___container">
          <h2>Liklihood Score</h2>
          <button className="score__button" id="like_score">
            {ls}
          </button>
        </div>
        <div className="lowerThreat">
          <div className="Thechnical__Impact">
            <h2>Technical Impact Factors</h2>
            <div className="row">
              <div className="Technical__head">Loss Of Confidentiality </div>
              <div className="Thecnical__option">
                <select id='loc' className="form-control" onChange={calcScore} >
                  <option value="2">Minimal non-sensitive data disclosed</option>
                  <option value="6">minimal critical data disclosed </option>
                  <option value="6">extensive non-sensitive data disclosed</option>
                  <option value="7">extensive critical data disclosed </option>
                  <option value="9">All Data Disclosed</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Technical__head">Loss Of Integrity</div>
              <div className="Thecnical__option">
                <select id='loi' className="form-control" onChange={calcScore} >
                  <option value="1">Minimal Slightly Corrupt Data</option>
                  <option value="3">Minimal Seriously Corrupt Data</option>
                  <option value="5">Extensive Slightly Corrupt Data</option>
                  <option value="7">Extensive Seriously Corrupt Data</option>
                  <option value="9">All Data Totally Corrupt</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Technical__head">Loss Of Availability</div>
              <div className="Thecnical__option">
                <select id='loa' className="form-control" onChange={calcScore} >
                  <option value="1">Minimal Secondary Services Interrupted</option>
                  <option value="5">minimal Primary Services Interrupted</option>
                  <option value="5">Extensive Secondary Services Interrupted</option>
                  <option value="7">Extensive Primary Services Interrupted </option>
                  <option value="9">All Services Completely Lost</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Technical__head">Loss of Accountability</div>
              <div className="Thecnical__option">
                <select id='loacc' className="form-control" onChange={calcScore} >
                  <option value="1">Fully Traceable</option>
                  <option value="7">Possibly Traceable</option>
                  <option value="9">Completely Anonymous</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Buisness__impact">
            <h2>Businesses Impact Factors</h2>
            <div className="row">
              <div className="Buisness__Head">Financial damage</div>
              <div className="Buisness__option">
                <select id='finan' className="form-control" onChange={calcScore} >
                  <option value="1">Less Than The Cost To Fix The Vulnerability</option>
                  <option value="3">Minor Effect On Annual Profit</option>
                  <option value="7">Significant Effect On Annual Profit</option>
                  <option value="9">Bankruptcy</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Buisness__Head">Reputation Damage</div>
              <div className="Buisness__option">
                <select id='reput' className="form-control" onChange={calcScore} >
                  <option value="1">Minimal Damage</option>
                  <option value="4">Loss Of Major Accounts</option>
                  <option value="5">Loss Of Goodwill</option>
                  <option value="9">Brand Damage</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Buisness__Head">Non-compliance</div>
              <div className="Buisness__option">
                <select id='comply' className="form-control" onChange={calcScore} >
                  <option value="2">Minor Violation </option>
                  <option value="5">Clear Violation</option>
                  <option value="7">High Profile Violation</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="Buisness__Head" >Privacy violation</div>
              <div className="Buisness__option">
                <select id='privacy' className="form-control" onChange={calcScore} >
                  <option value="3">One Individual</option>
                  <option value="5">Hundreds Of People </option>
                  <option value="7">Thousands Of People</option>
                  <option value="9">Millions Of People</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="btn___container">
          <h2>Impact Score</h2>
          <button className="score__button" id="impact_score">
            {is}
          </button>
        </div>
      </div>
    </>
  )
}

export default Riskfactor