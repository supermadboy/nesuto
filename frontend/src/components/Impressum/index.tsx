import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'block',
    height: '100vh',
    width: '100%',
    position: 'relative',
    '& p': {
      margin: 0,
    },
  },
  bold: {
    fontWeight: 'bold',
  },
  body: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(8),
  },
}));

const Impressum = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.body}>
        <p className={classes.bold}>Impressum</p>
        <br />
        <p>Lena Herrmann</p>
        <p>Florastraße 9</p>
        <p>40217 Düsseldorf</p>
        <br />
        <p>Angaben gemäß § 5 TMG</p>
        <br />
        <p>Programmierung: Markus Szarvas</p>
        <p>Gestaltung: Selina Vix</p>
        <br />
        <p className={classes.bold}>Haftung für Inhalte</p>
        <br />
        <p>
          Als Diensteanbieter sind wir, Foodcoop Speisekammer Konstanz e.V.,
          gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
          nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpfl ichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
        <br />
        <p className={classes.bold}>Haftung für Links</p>
        <br />
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
          der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
          inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
          von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
        <br />
        <p className={classes.bold}>Urheberrecht</p>
        <br />
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser
          Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
          werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
          Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <br />
        <p>Quelle: https://www.e-recht24.de</p>
      </div>
    </div>
  );
};

export default Impressum;
