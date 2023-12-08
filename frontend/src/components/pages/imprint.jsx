import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Imprint() {
  return (
    <div className='baseRoot' id='page-top'>
      <div className='container-fluid section'>
        <div
          id='imptop'
          style={{ position: 'absolute', top: '-100px', left: 0 }}
        />
        <div className='container'>
          <h1 className='mb-5'>Impressum und Datenschutz</h1>
          <h2>Impressum</h2>
          <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
          <p>
            Jan Bremauer
            <br />
            Metzstra&szlig;e 38
            <br />
            81667 M&uuml;nchen
          </p>
          <h3>Kontakt</h3>
          <p>E-Mail: jan@bremauer.cc</p>
          <h3>Haftung f&uuml;r Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
            f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
            gespeicherte fremde Informationen zu &uuml;berwachen oder nach
            Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
            dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h3>Haftung f&uuml;r Links</h3>
          <p>
            Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
            &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
            &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>{' '}
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
          <h2>Datenschutzerklärung</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
          <h3>Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3>
          <p>
            Wir erheben, verarbeiten und nutzen personenbezogene Daten nur,
            soweit sie für die Begründung, inhaltliche Ausgestaltung oder
            Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten).
            Personenbezogene Daten über die Inanspruchnahme unserer
            Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir
            nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme
            des Dienstes zu ermöglichen oder abzurechnen.
          </p>
          <h3>Recht auf Auskunft, Löschung, Sperrung</h3>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>
          <h3>Widerspruch Werbe-Mails</h3>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien wird hiermit widersprochen. Die
            Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
            im Falle der unverlangten Zusendung von Werbeinformationen, etwa
            durch Spam-E-Mails, vor.
          </p>
          <p>
            Quelle:
            <a className='link-color' href='https://www.e-recht24.de'>
              eRecht24
            </a>
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link className='impbutton' smooth to='/#'>
              <span>Home</span>
            </Link>
            <Link className='impbutton' smooth to='#'>
              <span>To Top</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imprint;
