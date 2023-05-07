import './Stats.css';
import { CloudSQLPerfContext, FirestorePerfContext, JSONContext } from '../App';
import FirestoreLogo from '../images/firestore-logo.png';
import CloudSQLLogo from '../images/cloud-sql-logo.png';
import { useContext } from 'react';

const syntaxHighlight = (json) => {
    if (!json) return ""; //no JSON from response
  
    json = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        var cls = "number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "key";
          } else {
            cls = "string";
          }
        } else if (/true|false/.test(match)) {
          cls = "boolean";
        } else if (/null/.test(match)) {
          cls = "null";
        }
        return '<span class="' + cls + '">' + match + "</span>";
      }
    );
  }

const Stats = (props) => {
    const cloudSQLPerfContext = useContext(CloudSQLPerfContext);
    const firestorePerfContext = useContext(FirestorePerfContext);
    const jsonContext = useContext(JSONContext);

    return(
        <div className='stats-area'>
            <div className='statbox title'>
                <p>ACS Testbench <span className='subtitle'>by Group B</span></p>
            </div>
            <div className='statbox'>
                <p>API Response Times (Average)</p>
                <div className='apiTimes'>
                    <div className='apiTimesContainer'>
                        <img className='apiTimeLogo' src={CloudSQLLogo} />
                        <p className={props.CloudSQL ? 'blink_blue' : ''}>
                            {cloudSQLPerfContext.CloudSQLPerf.toFixed(10)}
                        </p>
                    </div>
                    <div className='apiTimesContainer'>
                        <img className='apiTimeLogo' src={FirestoreLogo} />
                        <p className={props.CloudSQL ? '' : 'blink_yellow'}>
                            {firestorePerfContext.FirestorePerf.toFixed(10)}
                        </p>
                    </div>
                </div>
            </div>
            <div className='statbox jsonContainer'>
                <p>JSON Response (Length: {JSON.stringify(jsonContext.currentJSON).length})</p>
                {/* <p className='currentJson'>{JSON.stringify(jsonContext.currentJSON)}</p> */}
                <pre className='currentJson'
                    dangerouslySetInnerHTML={{
                    __html: syntaxHighlight(JSON.stringify(jsonContext.currentJSON, undefined, 4))
                    }}
                />
            </div>
        </div>
    );
}

export default Stats;