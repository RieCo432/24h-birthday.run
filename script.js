$(document).ready(function(){
	$(".tabswitch").click(function() {
		var hrefClicked = $(this).attr("href");
		if(hrefClicked.match("^#")) {
			var viewRequested = hrefClicked.substring(hrefClicked.indexOf("#") + 1);
			$(".is-active").removeClass("is-active");
			$("#"+viewRequested).addClass("is-active");
			$(".tablink_"+viewRequested).addClass("is-active");
		}
	});

	$("#choose_english").click(function() {
		changeLang("en");
		changeLangDialog.close();
	});
	$("#choose_german").click(function() {
		changeLang("de");
		changeLangDialog.close();
	});
	$("#choose_french").click(function() {
		changeLang("fr");
		changeLangDialog.close();
	});

	var changeLangDialog = document.querySelector('#change_lang_dialog');
	var showDialogButton = document.querySelector('#change_lang');
	if (! changeLangDialog.showModal) {
		dialogPolyfill.registerDialog(changeLangDialog);
	}
	showDialogButton.addEventListener('click', function() {
		changeLangDialog.showModal();
	});

	var showRulesDialog = document.querySelector("#rules_dialog");
	var showRulesDialogTrigger = $("#registerframe").contents().find("#RRRegStartButtons div");
	if (! showRulesDialog.showModal) {
		dialogPolyfill.registerDialog(showRulesDialog);
	}
	showRulesDialogTrigger.click(function() {
		console.log("click");
		showRulesDialog.showModal();
	});




	var overview_header = "Overview";
	var theevent_header = "The Event";
	var therun_header = "The Run";
	var thelocation_header = "The Location";
	var media_header = "Media";
	var faq_header = "FAQ";
	var overview_theevent_text = "This event is intended as a birthday party to celebrate three birthdays. It is a public event, so everyone is welcome. There will be a 24h run, party, food and drinks and the main goal is to collect some money for a good cause.";
	var learn_more = "Learn more";
	var singlerun_header = "Single Run";
	var overview_singlerun_text = "Just as the name says, in this run you are on your own, but don't be afraid, you don't have to run for 24 hours straight ";
	var teamrun_header = "Team Run";
	var overview_teamrun_text = "The team run is intended to be 24 hours long, but teams don't have to run for a total of 24 hours ";
	var norun_header = "No Run";
	var overview_norun_text = "Just sit back, have a drink and enjoy the party! Please remember that you can also donate without running a single meter, although the satisfaction won't be that great.";
	var makeawish_text = "Make a Wish is an organization that aims to fulfill the wishes of children that have been diagnosed with an uncurable disease. You can checkout their website here: ";
	var sosvillagedenfantsmonde_text = "S.O.S. Village d'enfants monde focusses on building foster communities to offer a home to children that for whatever reason cannot enjoy growing up with their biological parents. Learn more at ";
	var theevent_intro = "On this page you should find all information you need regarding the event itself. If you are searching for information regarding the run, please visit ";
	var what = "What?";
	var why = "Why?";
	var when = "When?";
	var where = "Where?";
	var theevent_what1 = "Primarily this event is a birthday party to celebrate the following three birthdays:";
	var theevent_what2 = 'Secondarily, it is a public running event, with the goal being to collect money for "Make a Wish" and "S.O.S. Village d'+"'"+ 'Enfants Monde"'+"for every kilometer ran.";
	var theevent_what3 = "The events is over 24 hours long, while the run is exactly 24 hours. No-one is obliged to take part or stay on-site the whole time. However, those who want can stay there all the time, bring sleeping bags or just stay up. There's breakfast in the morning and meals during afternoon and evening. Drinks are of course also available. A part of the revenue generated by selling food and drinks is also going to the above-mentionned organisations.";
	var theevent_why1 = "We organized this party because we want to have a big celebration for these two special birthdays, 18 and 50. Plus, we thought this is a perfect opportunity to raise awareness that other people don't have the same luck as we do and help them at the same time.";
	var theevent_where1 = 'The party is set to take place at the "Stade Athlétique Schifflange", which can be found at the top end of "Montée du cimetière" in Schifflange';
	var theevent_when1 = "The event and the run will start on Friday July 7th 2017 at 8 pm. The run will end on Saturday evening at 8 pm, the party however will continue into the night to Sunday.";
	var therun_intro = "This page offers all the information you need to know if you want to participate in the run. If you are looking for information on the event itself, check out";
	var registration = "Registration";
	var participants = "Participants";
	var sections = "Sections";
	var contact = "Contact";
	var email_us = "Email us";
	var contact_form = "Contact form";
	var this_page = "this page";
	var contents = "Contents";
	var therun_disciplines_header = "Disciplines";
	var therun_disciplines_intro = "During this event, there are 3 different categories which can be run as a solo runner or in a team. There is a 24h run, a 12h run and a 6h hour run. Team runners run consecutively, never at the same time. If a team changes their runner, the chip must be handed from the running runner to the next runner. Solo runners are obliged to have their chip on them at all times during the run to make sure their laps are counted correctly. Solo runners and team scores are published separately, as teams will most likely perform better</br>All races end at 8pm on Saturday evening, so be patient when the exact distances are measured.";
	var therun_disciplines_24hrun = "24h Run";
	var therun_disciplines_24hrun_text = "As the name suggests, this run takes a whopping 24 hours, so it's made for the really hardcore runners out there. The race starts at 8pm on Friday July 7th 2017 and ends at 8pm on Saturday July 8th 2017. It is not mandatory to run during the whole time.";
	var therun_disciplines_12hrun = "12h Run";
	var therun_disciplines_12hrun_text = "As the name suggests, this run takes 12 hours, so it's made for the advanced runners out there. The race starts at 8am on saturday July 8th 2017 and ends at 8pm on Saturday July 8th 2017. It is not mandatory to run during the whole time.";
	var therun_disciplines_6hrun = "6h Run";
	var therun_disciplines_6hrun_text = "As the name suggests, this run takes a mere 6 hours, so it's made for lazy people ;). The race starts at 2pm on Saturday July 8th 2017 and ends at 8pm on Saturday July 8th 2017. It is not mandatory to run during the whole time.";

	var therun_rules_general_header = "General";
	var therun_rules_general1 = "The race is subject to the rules of the FLA (Fédération Luxembourgeoise d‘Athlétisme).";
	var therun_rules_general2 = "A membership within the FLA is not mandatory.";
	var therun_rules_general3 = "Photos, videos and interviews made in context of the event can be used without further notice.";
	var therun_rules_ranking_header = "Ranking";
	var therun_rules_ranking1 = "During the whole race, only one member of each team is allowed to run at a given moment. Team members change their runner as they please within the zone intended for this purpose, by giving the 'chip' to the next runner.";
	var therun_rules_ranking2 = "The team that has completed the highest number of laps in its category wins the race (in its corresponding category). The lapcounter will be stopped after exactly 24 hours. The last valid lap is the last lap completed within the 24 hour mark.";
	var therun_rules_ranking3 = "As for solo runners, the exact distance they ran is measured.";
	var therun_rules_responsibility_header = "Assurance / Responsibility";
	var therun_rules_responsibility1 = "Insurance is expressly the responsibility of the participant.";
	var therun_rules_responsibility2 = "With the registration, each participant, whether solo runner or team runner, confirms that";
	var therun_rules_responsibility2_1 = "he or she read the rules and understands them.";
	var therun_rules_responsibility2_2 = "he or she is healthy and sufficiently trained for the strain of such a competition.";
	var therun_rules_responsibility2_3 = "he or she is participating at their own risk and responsibility.";
	var therun_rules_responsibility3 = "For participants below legal age, a person entitled to education confirms with the consent form that above mentionned conditions are fulfilled.";
	var therun_rules_responsibility4 = "We recommend each participant to see a doctor who can confirm that the participants is able to complete such a race.";
	var therun_rules_penalities_header = "Penalities / Opposition";
	var therun_rules_penalities1 = "Every unsporting such as remping and each violation of these rules results in the disqualification of the runner or the whole team.";
	var therun_rules_penalities2 = "A runner or team found to have no 'chip' will be penalized with a 'minus-round'. When they are found without a 'chip' a second time, they will be disqualified.";
	var therun_rules_penalities3 = "Opposition to a disqualification as well as oppositions to the results have to be reported until at last 30 minutes after the end of the race.";
	var therun_rules_interruption_header = "Interruption";
	var therun_rules_interruption1 = "The organizer of the event has the right to interrupt or cancel the race in case of bad weather or another reason of higher force.";
	var therun_rules_interruption2 = "In this case, the participants have no right to reclaim their inscription fee.";
	var therun_rules_cleanliness_header = "Cleanliness";
	var therun_rules_cleanliness1 = "All waste has to be disposed of properly in the correct waste containers.";	


	var overview_header_de = "Übersicht";
	var theevent_header_de = "Das Event";
	var therun_header_de = "Das Rennen";
	var thelocation_header_de = "Der Ort";
	var media_header_de = "Media";
	var faq_header_de = "FAQ";
	var overview_theevent_text_de = "Dieses Event ist als Feier von 3 Geburtstagen gedacht. Es ist ein öffentliches Event, also ist jeder willkommen. Es wird ein 24h Rennen geben, Party, Getränke und Essen und das Hauptziel ist Spenden zu sammeln für einen guten Zweck.";
	var learn_more_de = "Mehr erfahren";
	var singlerun_header_de = "Einzelrennen";
	var overview_singlerun_text_de = "Wie der Name es schon verrät, handelt es sich um ein Einzelrennen, aber haben sie keine Angst, sie müssen nicht 24h lang laufen ";
	var teamrun_header_de = "Teamrennen";
	var overview_teamrun_text_de = "Im Teamrun geht es darum, als Team, einer nach dem Anderen die ganze Zeit über zu laufen ";
	var norun_header_de = "Kein Rennen";
	var overview_norun_text_de = "Lehnen Sie sich zurück, trinken Sie Ihr Getränk und genießen Sie die Party. Bitte vergessen Sie nicht, dass sie dennoch spenden können";
	var makeawish_text_de = "Make a Wish ist eine Organisation, deren Ziel es ist, schwer kranken Kindern einen Wunsch zu erfüllen. Sie können deren Webseite besuchen unter ";
	var sosvillagedenfantsmonde_text_de = "S.O.S. Villages d'Enfants Monde ist eine Organisation, die Pflegegemeinschaften aufbaut für Kinder, die aus diversen Gründen nicht bei ihren leiblichen Eltern aufwachsen können. Erfahren sie mehr unter ";
	var theevent_intro_de = "Auf dieser Seite sollten sie alle Informationen zum Event finden können. Falls Sie nach Informationen zum Rennen suchen, bitte besuchen sie ";
	var what_de = "Was?";
	var why_de = "Warum?";
	var when_de = "Wenn?";
	var where_de = "Wo?";
	var theevent_what1_de = "In erster Linie geht es darum, diese 3 Geburtstage zu feiern:";
	var theevent_what2_de = 'Desweiteren ist es eine öffentliche Laufveranstaltung mit dem Ziel Spenden zu sammeln für "Make a Wish" and "S.O.S. Village d'+"'"+ 'Enfants Monde"'+".";
	var theevent_what3_de = "Das Event ist über 24 Stunden lang, während das Rennen exakt 24 Stunden dauert. Niemand ist dazu verpflichtet, während der gesammten Zeit teilzunehmen oder anwesend zu sein. Allerdings können die, die über den gesammten Zeitraum präsent sein wollen, Schlafsäcke mitbringen oder dauerhaft wach bleiben. Am Morgen gibt es Frühstück und von Mittags bis Abends stehen Foodtrucks bereit, um Ihren kulinarischen Wünschen nachzugehen. Getränk gibt es natürlich auch. Ein Teil der Einnahmen gehen an die oben genannten Hilfsorganisationen.";
	var theevent_why1_de = "Wir haben dieses Event organisiert um die beiden sehr speziellen Geburtstage 18 und 50 zu feiern und um darauf aufmersam zu machen, dass es Menschen gibt, denen es nicht so gut geht und diesen gleichzeitig zu helfen.";
	var theevent_where1_de = 'Das gesammte Event findet statt im "Stade Athlétique Schifflange", welches sich am oberen Ende der "Montée du cimetière" in Schifflange befindet.';
	var theevent_when1_de = "Das Event geht am Freitag, den 7. Juli 2017 um 20:00 Uhr los. Das Rennen wird am 8. Juli um 20:00 Uhr beendent. Die Party geht jedoch weiter bis in die Nacht zu Sonntag.";
	var therun_intro_de	= "Diese Seite enthält alles, was Sie über das Rennen wissen müssen. Für Informationen über das Event, besuchen Sie ";
	var therun_disciplines_header_de = "Disziplinen";
	var therun_disciplines_intro_de = "Bei diesem Lauf gibt es 3 Disziplinen, die alleine oder im Team absolviert werden können. Es gibt einen 24h Lauf, einen 12h Lauf und einen 6h Lauf. Teamläufer laufen nacheinander, nie gleichzeitig. When der Läufer einen Teams gewechselt werden soll, erfolgt dies durch die Übergabe des Chips an den nächsten Läufer. Einzelläufer sind dazu verpflichtet, ihren Chip während des gesammten Rennen bei sich zu tragen, um sicher zu gehen, dass die Runden korrekt gezählt werden. Aufgrund der Tendenz, dass Teams besser abschneiten als Einzelläufer, werden die Resultate beider Gruppen einzeln gelistet.</br>Alle Rennen enden am Samstag um 20:00, bitte haben sie Geduld wenn die gelaufe Distanz der angefangenen Runde gemessen wird!";
	var therun_disciplines_24hrun_de = "24h Run";
	var therun_disciplines_24hrun_text_de = "Wie der Titel bereits andeutet, ist dies ein 24-Stundenlauf. Das Rennen beginnt am Freitag, den 7. Juli 2017 um 20:00 und ended 24 Stunden später am Samstag, den 8. Juli 2017 um 20:00. Es ist nicht notwendig, während der gesammten Zeit zu laufen.";
	var therun_disciplines_12hrun_de = "12h Run";
	var therun_disciplines_12hrun_text_de = "Wie der Titel vermuten lässt, handelt es sich hierbei um einen 12-Stundenlauf. Das Rennen beginnt am Samstag, den 8. Juli 2017 um 08:00 und ended 12 Stunden später am Samstag, den 8. Juli 2017 um 20:00. Es ist nicht notwendig, während der gesammten Zeit zu laufen.";
	var therun_disciplines_6hrun_de = "6h Run";
	var therun_disciplines_6hrun_text_de = "Wie der Titel vermuten lässt, handelt es sich hierbei um einen 6-Stundenlauf. Das Rennen beginnt am Samstag, den 8. Juli 2017 um 14:00 und ended 6 Stunden später am Samstag, den 8. Juli 2017 um 20:00. Es ist nicht notwendig, während der gesammten Zeit zu laufen.";
	var registration_de = "Anmeldung";
	var participants_de = "Teilnehmerliste";
	var sections_de = "Unterteilungen";
	var contact_de	= "Kontakt";
	var email_us_de = "Emailen sie uns";
	var contact_form_de = "Kontaktformular";
	var this_page_de = "diese Seite";
	var contents_de = "Inhalt";
	var therun_rules_general_header_de = "Allgemein";
	var therun_rules_general1_de = "Das Rennen wird nach der Sportordnung der FLA (Fédération Luxembourgeoise d‘Athlétisme) gelaufen.";
	var therun_rules_general2_de = "Eine Vereinsmitgliedschaft ist nicht erforderlich.";
	var therun_rules_general3_de = "Im Zusammenhang mit der Veranstaltung gemachte Fotos, Filmaufnahmen und Interviews können ohne Vergütungsanspruch verwendet werden.";
	var therun_rules_ranking_header_de = "Wertung";
	var therun_rules_ranking1_de = "Während des Rennens ist nur ein einziger Läufer je Team im Einsatz. Die Teams wechseln nach eigenem Ermessen in der Wechselzone durch Weitergabe des „Chips“.";
	var therun_rules_ranking2_de = "Es gewinnt das Team, welches in seiner Kategorie die meisten Runden absolviert hat. Exakt nach 24 Stunden wird die Zeitnahme beendet. Die letzte Runde zählt, wenn vor 24 Stunden über die Ziellinie gelaufen wurde.";
	var therun_rules_ranking3_de = "Bei den Einzelläufern wird die exakt gelaufene Distanz gewertet.";
	var therun_rules_responsibility_header_de = "Versicherung / Haftungsausschluss";
	var therun_rules_responsibility1_de = "Die Versicherung ist ausdrücklich Sache des Teilnehmers.";
	var therun_rules_responsibility2_de = "Mit der Anmeldung bestätigt jeder Teilnehmer, ob Einzelläufer oder Teamteilnehmer,";
	var therun_rules_responsibility2_1_de = "das Reglement zu kennen und verstanden zu haben";
	var therun_rules_responsibility2_2_de = "gesund und für die Belastungen eines Laufwettbewerbs ausreichend trainiert ist";
	var therun_rules_responsibility2_3_de = "auf eigene Gefahr und Verantwortung teilzunehmen";
	var therun_rules_responsibility3_de = "Bei minderjährigen Teilnehmern bestätigt ein Erziehungsberechtigter mit der Einverständniserklärung, dass obengenannte Bedingungen erfüllt sind.";
	var therun_rules_responsibility4_de = "Wir empfehlen jedem Teilnehmer sich vor der Veranstaltung von einem Sportarzt untersuchen zu lassen, und sich seine Fitness bestätigen zu lassen.";
	var therun_rules_penalities_header_de = "Strafen / Einspruch";
	var therun_rules_penalities1_de = "Jegliche Unsportlichkeit (Rempeln z.B.) und jeder Verstoß gegen dieses Reglement führen zur Disqualifikation des Läufers oder des gesamten Teams.";
	var therun_rules_penalities2_de = "Ein Läufer oder Team, welche ohne „Chip“ angetroffen werden, werden mit einer “Minus-Runde“ bestraft. Beim zweiten Mal erfolgt die Disqualifikation.";
	var therun_rules_penalities3_de = "Einspruch gegen eine Disqualifikation sowie Einsprüche gegen die Ergebnisse sind spätestens bis 30 Minuten nach dem Zieleinlauf vorzutragen.";
	var therun_rules_interruption_header_de = "Abbruch";
	var therun_rules_interruption1_de = "Der Veranstalter behält sich das Recht vor, bei sehr schlechter Witterung oder höherer Gewalt eine Unterbrechung bzw. einen Abbruch des Rennens anzuordnen.";
	var therun_rules_interruption2_de = "Die Teilnehmer haben in diesem Fall keinen Anspruch auf Rückerstattung der bezahlten Startgebühr.";
	var therun_rules_cleanliness_header_de = "Sauberkeit";
	var therun_rules_cleanliness1_de = "Sämtliche Abfälle müssen in die entsprechenden Behältnisse geworfen werden.";	


	var overview_header_fr = "Overview";
	var theevent_header_fr = "The Event";
	var therun_header_fr = "The Run";
	var thelocation_header_fr = "The Location";
	var media_header_fr = "Media";
	var faq_header_fr = "FAQ";
	var overview_theevent_text_fr = "This event is intended as a birthday party to celebrate three birthdays. It is a public event, so everyone is welcome. There will be a 24h run, party, food and drinks and the main goal is to collect some money for a good cause.";
	var learn_more_fr = "Learn more";
	var singlerun_header_fr = "Single Run";
	var overview_singlerun_text_fr	= "Just as the name says, in this run you are on your own, but don't be afraid, you don't have to run for 24 hours straight ";
	var teamrun_header_fr = "Team Run";
	var overview_teamrun_text_fr = "The team run is intended to be 24 hours long, but teams don't have to run for a total of 24 hours ";
	var norun_header_fr = "No Run";
	var overview_norun_text_fr = "Just sit back, have a drink and enjoy the party! Please remember that you can also donate without running a single meter, although the satisfaction won't be that great.";
	var makeawish_text_fr = "Make a Wish is an organization that aims to fulfill the wishes of children that have been diagnosed with an uncurable disease. You can checkout their website here: ";
	var sosvillagedenfantsmonde_text_fr = "S.O.S. Village d'enfants monde focusses on building foster communities to offer a home to children that for whatever reason cannot enjoy growing up with their biological parents. Learn more at ";
	var theevent_intro_fr = "On this page you should find all information you need regarding the event itself. If you are searching for information regarding the run, please visit ";
	var what_fr = "What?";
	var why_fr = "Why?";
	var when_fr = "When?";
	var where_fr = "Where?";
	var theevent_what1_fr = "Primarily this event is a birthday party to celebrate the following three birthdays:";
	var theevent_what2_fr = 'Secondarily, it is a public running event, with the goal being to collect money for "Make a Wish" and "S.O.S. Village d'+"'"+ 'Enfants Monde"'+"for every kilometer ran.";
	var theevent_what3_fr = "The events is over 24 hours long, while the run is exactly 24 hours. No-one is obliged to take part or stay on-site the whole time. However, those who want can stay there all the time, bring sleeping bags or just stay up. There's breakfast in the morning and meals during afternoon and evening. Drinks are of course also available. A part of the revenue generated by selling food and drinks is also going to the above-mentionned organisations.";
	var theevent_why1_fr = "We organized this party because we want to have a big celebration for these two special birthdays, 18 and 50. Plus, we thought this is a perfect opportunity to raise awareness that other people don't have the same luck as we do and help them at the same time.";
	var theevent_where1_fr = 'The party is set to take place at the "Stade Athlétique Schifflange", which can be found at the top end of "Montée du cimetière" in Schifflange';
	var theevent_when1_fr = "The event and the run will start on Friday July 7th 2017 at 8 pm. The run will end on Saturday evening at 8 pm, the party however will continue into the night to Sunday.";
	var therun_disciplines_header_fr = "Disciplines";
	var therun_disciplines_intro_fr = "During this event, there are 3 different categories which can be run as a solo runner or in a team. There is a 24h run, a 12h run and a 6h hour run. Team runners run consecutively, never at the same time. If a team changes their runner, the chip must be handed from the running runner to the next runner. Solo runners are obliged to have their chip on them at all times during the run to make sure their laps are counted correctly. Solo runners and team scores are published separately, as teams will most likely perform better</br>All races end at 8pm on Saturday evening, so be patient when the exact distances are measured.";
	var therun_disciplines_24hrun_fr = "24h Run";
	var therun_disciplines_24hrun_text_fr = "As the name suggests, this run takes a whopping 24 hours, so it's made for the really hardcore runners out there. The race starts at 8pm on Friday July 7th 2017 and ends at 8pm on Saturday July 8th 2017. It is not mandatory to run during the whole time.";
	var therun_disciplines_12hrun_fr = "12h Run";
	var therun_disciplines_12hrun_text_fr = "As the name suggests, this run takes 12 hours, so it's made for the advanced runners out there. The race starts at 8am on saturday July 8th 2017 and ends at 8pm on Saturday July 8th 2017. It is not mandatory to run during the whole time.";
	var therun_disciplines_6hrun_fr = "6h Run";
	var therun_disciplines_6hrun_text_fr = "As the name suggests, this run takes a mere 6 hours, so it's made for lazy people ;). The race starts at 2pm on Saturday July 8th 2017 and ends at 8pm on Saturday July 8th 2017. It is not mandatory to run during the whole time.";
	var therun_intro_fr = "This page offers all the information you need to know if you want to participate in the run. If you are looking for information on the event itself, check out ";
	var registration_fr = "Registration";
	var participants_fr = "Participants";
	var sections_fr = "Sections";
	var contact_fr = "Contact";
	var email_us_fr = "Email us";
	var contact_form_fr = "Contact form";
	var this_page_fr = "cette page";
	var contents_fr = "Contenu";
	var therun_rules_general_header_fr = "Généralités";
	var therun_rules_general1_fr = "La course aura lieu en conformité avec les directives sportives de la FLA (Fédération Luxembourgeoise d’Athlétisme).";
	var therun_rules_general2_fr = "Une affiliation à l’association fédérale n’est pas requise.";
	var therun_rules_general3_fr = "Des photos, des prises de vue cinématographique et des interviews réalisées dans le cadre de cette manifestation peuvent être utilisées sans droit à compensation.";
	var therun_rules_ranking_header_fr = "Classement";
	var therun_rules_ranking1_fr = "Pendant une course seulement un athlète par équipe ne peut être en action. Les équipes ne peuvent changer d’athlètes que dans les zones réservées à ces fins et moyennant la transmission du “chip”.";
	var therun_rules_ranking2_fr = "L’équipe qui réalise le plus grand nombre de tours gagne. Précisément après 24 heures, le chronométrage sera arrêté. Le dernier tour parcouru après avoir passé la ligne d’arrivée sera encore mis en compte à l’expiration du temps réglementaire.";
	var therun_rules_ranking3_fr = "La distance exactement parcourue sera notée pour les athlètes individuels.";
	var therun_rules_responsibility_header_fr = "Assurance / Responsabilité";
	var therun_rules_responsibility1_fr = "L’organisateur décline toute responsabilité pour accidents et dégâts.";
	var therun_rules_responsibility2_fr = "Par l’inscription tous les participants, inscrits soit à titre individuel soit en équipe";
	var therun_rules_responsibility2_1_fr = "reconnaissent avoir pris connaissance du règlement,";
	var therun_rules_responsibility2_2_fr = "déclarent être physiquement aptes à participer et";
	var therun_rules_responsibility2_3_fr = "s’engagent à participer aux épreuves à leurs propres risques et périls.";
	var therun_rules_responsibility3_fr = "Pour un athlète mineur, les obligations ci-avant doivent être reconnues par une personne chargée de l’éducation.";
	var therun_rules_responsibility4_fr = "L’organisateur recommande à chaque participant de se faire examiner au préalable par un médecin sportif.";
	var therun_rules_penalities_header_fr = "Amendes / Opposition";
	var therun_rules_penalities1_fr = "Chaque comportement déloyal (bousculade p.ex.) et chaque manquement au présent règlement entrainent la disqualification de l’athlète respectivement de l’équipe.";
	var therun_rules_penalities2_fr = "Un athlète ou une équipe, attrapé sans être en possession du “chip”, sera puni de la réduction d’un tour. La récidive entraine la disqualification.";
	var therun_rules_penalities3_fr = "Une opposition formelle contre la disqualification ou toute objection à l’égard des résultats doivent être introduites au plus tard 30 minutes après l’arrivée.";
	var therun_rules_interruption_header_fr = "Arrêt";
	var therun_rules_interruption1_fr = "Lors de conditions météorologiques extrêmes ou en cas de force majeure, l’organisateur se réserve le droit d’ordonner une interruption ou un arrêt complet de la course.";
	var therun_rules_interruption2_fr = "Dans ce cas, les participants n’ont aucun droit au remboursement de leurs paiements.";
	var therun_rules_cleanliness_header_fr = "Propreté";
	var therun_rules_cleanliness1_fr = "Il est obligatoire de jeter les ordures dans les poubelles installées à cet effet.";

	function changeLang(desiredLang) {

		if (desiredLang === "de-DE" || desiredLang === "de") {

			$(".overview_header").text(overview_header_de);
			$(".theevent_header").text(theevent_header_de);
			$(".therun_header").text(therun_header_de);
			/*$(".thelocation_header").text(thelocation_header_de);
			$(".media_header").text(media_header_de);
			$(".faq_header").text(faq_header_de);*/
			$(".learn_more").text(learn_more_de);
			$(".overview_theevent_text").text(overview_theevent_text_de);
			$(".singlerun_header").text(singlerun_header_de);
			$(".overview_therun_singlerun_text").text(overview_singlerun_text_de);
			$(".teamrun_header").text(teamrun_header_de);
			$(".overview_therun_teamrun_text").text(overview_teamrun_text_de);
			$(".norun_header").text(norun_header_de);
			$(".overview_therun_norun_text").text(overview_norun_text_de);
			$(".makeawish_text").text(makeawish_text_de);
			$(".sosvillagedenfantsmonde_text").text(sosvillagedenfantsmonde_text_de);
			$(".theevent_intro").text(theevent_intro_de);
			$(".this_page").text(this_page_de);
			$(".contents").text(contents_de);
			$(".what_q").text(what_de);
			$(".why_q").text(why_de);
			$(".when_q").text(when_de);
			$(".where_q").text(where_de);
			$(".theevent_what1").text(theevent_what1_de);
			$(".theevent_what2").text(theevent_what2_de);
			$(".theevent_what3").text(theevent_what3_de);
			$(".theevent_why1").text(theevent_why1_de);
			$(".theevent_when1").text(theevent_when1_de);
			$(".theevent_where1").text(theevent_where1_de);

			$(".therun_disciplines_header").text(therun_disciplines_header_de);
			$(".therun_disciplines_intro").html(therun_disciplines_intro_de);
			$(".therun_disciplines_24hrun").text(therun_disciplines_24hrun_de);
			$(".therun_disciplines_24hrun_text").text(therun_disciplines_24hrun_text_de);
			$(".therun_disciplines_12hrun").text(therun_disciplines_12hrun_de);
			$(".therun_disciplines_12hrun_text").text(therun_disciplines_12hrun_text_de);
			$(".therun_disciplines_6hrun").text(therun_disciplines_6hrun_de);
			$(".therun_disciplines_6hrun_text").text(therun_disciplines_6hrun_text_de);

			$(".therun_intro").text(therun_intro_de);
			$(".registration_card_header").text(registration_de);
			$(".participants_card_header").text(participants_de);
			$(".sections").text(sections_de);
			$(".contact").text(contact_de);
			$(".email_us").text(email_us_de);
			$(".contact_form").text(contact_form_de);

			$(".therun_rules_general_header").text(therun_rules_general_header_de);
			$(".therun_rules_general1").text(therun_rules_general1_de);
			$(".therun_rules_general2").text(therun_rules_general2_de);
			$(".therun_rules_general3").text(therun_rules_general3_de);
			$(".therun_rules_ranking_header").text(therun_rules_ranking_header_de);
			$(".therun_rules_ranking1").text(therun_rules_ranking1_de);
			$(".therun_rules_ranking2").text(therun_rules_ranking2_de);
			$(".therun_rules_ranking3").text(therun_rules_ranking3_de);
			$(".therun_rules_responsibility_header").text(therun_rules_responsibility_header_de);
			$(".therun_rules_responsibility1").text(therun_rules_responsibility1_de);
			$(".therun_rules_responsibility2").text(therun_rules_responsibility2_de);
			$(".therun_rules_responsibility2_1").text(therun_rules_responsibility2_1_de);
			$(".therun_rules_responsibility2_2").text(therun_rules_responsibility2_2_de);
			$(".therun_rules_responsibility2_3").text(therun_rules_responsibility2_3_de);
			$(".therun_rules_responsibility3").text(therun_rules_responsibility3_de);
			$(".therun_rules_responsibility4").text(therun_rules_responsibility4_de);
			$(".therun_rules_penalities_header").text(therun_rules_penalities_header_de);
			$(".therun_rules_penalities1").text(therun_rules_penalities1_de);
			$(".therun_rules_penalities2").text(therun_rules_penalities2_de);
			$(".therun_rules_penalities3").text(therun_rules_penalities3_de);
			$(".therun_rules_interruption_header").text(therun_rules_interruption_header_de);
			$(".therun_rules_interruption1").text(therun_rules_interruption1_de);
			$(".therun_rules_interruption2").text(therun_rules_interruption2_de);
			$(".therun_rules_cleanliness_header").text(therun_rules_cleanliness_header_de);
			$(".therun_rules_cleanliness1").text(therun_rules_cleanliness1_de);

		} else if (desiredLang === "fr-FR" || desiredLang === "fr") {

			$(".overview_header").text(overview_header_fr);
			$(".theevent_header").text(theevent_header_fr);
			$(".therun_header").text(therun_header_fr);
			/*$(".thelocation_header").text(thelocation_header_fr);
			$(".media_header").text(media_header_fr);
			$(".faq_header").text(faq_header_fr);*/
			$(".learn_more").text(learn_more_fr);
			$(".overview_theevent_text").text(overview_theevent_text_fr);
			$(".singlerun_header").text(singlerun_header_fr);
			$(".overview_therun_singlerun_text").text(overview_singlerun_text_fr);
			$(".teamrun_header").text(teamrun_header_fr);
			$(".overview_therun_teamrun_text").text(overview_teamrun_text_fr);
			$(".norun_header").text(norun_header_fr);
			$(".overview_therun_norun_text").text(overview_norun_text_fr);
			$(".makeawish_text").text(makeawish_text_fr);
			$(".sosvillagedenfantsmonde_text").text(sosvillagedenfantsmonde_text_fr);
			$(".theevent_intro").text(theevent_intro_fr);
			$(".this_page").text(this_page_fr);
			$(".contents").text(contents_fr);
			$(".what_q").text(what_fr);
			$(".why_q").text(why_fr);
			$(".when_q").text(when_fr);
			$(".where_q").text(where_fr);
			$(".theevent_what1").text(theevent_what1_fr);
			$(".theevent_what2").text(theevent_what2_fr);
			$(".theevent_what3").text(theevent_what3_fr);
			$(".theevent_why1").text(theevent_why1_fr);
			$(".theevent_when1").text(theevent_when1_fr);
			$(".theevent_where1").text(theevent_where1_fr);
			$(".therun_intro").text(therun_intro_fr);

			$(".therun_disciplines_header").text(therun_disciplines_header_fr);
			$(".therun_disciplines_intro").html(therun_disciplines_intro_fr);
			$(".therun_disciplines_24hrun").text(therun_disciplines_24hrun_fr);
			$(".therun_disciplines_24hrun_text").text(therun_disciplines_24hrun_text_fr);
			$(".therun_disciplines_12hrun").text(therun_disciplines_12hrun_fr);
			$(".therun_disciplines_12hrun_text").text(therun_disciplines_12hrun_text_fr);
			$(".therun_disciplines_6hrun").text(therun_disciplines_6hrun_fr);
			$(".therun_disciplines_6hrun_text").text(therun_disciplines_6hrun_text_fr);

			$(".registration_card_header").text(registration_fr);
			$(".participants_card_header").text(participants_fr);
			$(".sections").text(sections_fr);
			$(".contact").text(contact_fr);
			$(".email_us").text(email_us_fr);
			$(".contact_form").text(contact_form_fr);

			$(".therun_rules_general_header").text(therun_rules_general_header_fr);
			$(".therun_rules_general1").text(therun_rules_general1_fr);
			$(".therun_rules_general2").text(therun_rules_general2_fr);
			$(".therun_rules_general3").text(therun_rules_general3_fr);
			$(".therun_rules_ranking_header").text(therun_rules_ranking_header_fr);
			$(".therun_rules_ranking1").text(therun_rules_ranking1_fr);
			$(".therun_rules_ranking2").text(therun_rules_ranking2_fr);
			$(".therun_rules_ranking3").text(therun_rules_ranking3_fr);
			$(".therun_rules_responsibility_header").text(therun_rules_responsibility_header_fr);
			$(".therun_rules_responsibility1").text(therun_rules_responsibility1_fr);
			$(".therun_rules_responsibility2").text(therun_rules_responsibility2_fr);
			$(".therun_rules_responsibility2_1").text(therun_rules_responsibility2_1_fr);
			$(".therun_rules_responsibility2_2").text(therun_rules_responsibility2_2_fr);
			$(".therun_rules_responsibility2_3").text(therun_rules_responsibility2_3_fr);
			$(".therun_rules_responsibility3").text(therun_rules_responsibility3_fr);
			$(".therun_rules_responsibility4").text(therun_rules_responsibility4_fr);
			$(".therun_rules_penalities_header").text(therun_rules_penalities_header_fr);
			$(".therun_rules_penalities1").text(therun_rules_penalities1_fr);
			$(".therun_rules_penalities2").text(therun_rules_penalities2_fr);
			$(".therun_rules_penalities3").text(therun_rules_penalities3_fr);
			$(".therun_rules_interruption_header").text(therun_rules_interruption_header_fr);
			$(".therun_rules_interruption1").text(therun_rules_interruption1_fr);
			$(".therun_rules_interruption2").text(therun_rules_interruption2_fr);
			$(".therun_rules_cleanliness_header").text(therun_rules_cleanliness_header_fr);
			$(".therun_rules_cleanliness1").text(therun_rules_cleanliness1_fr);

		} else {

			$(".overview_header").text(overview_header);
			$(".theevent_header").text(theevent_header);
			$(".therun_header").text(therun_header);
			/*$(".thelocation_header").text(thelocation_header);
			$(".media_header").text(media_header);
			$(".faq_header").text(faq_header);*/
			$(".learn_more").text(learn_more);
			$(".overview_theevent_text").text(overview_theevent_text);
			$(".singlerun_header").text(singlerun_header);
			$(".overview_therun_singlerun_text").text(overview_singlerun_text);
			$(".teamrun_header").text(teamrun_header);
			$(".overview_therun_teamrun_text").text(overview_teamrun_text);
			$(".norun_header").text(norun_header);
			$(".overview_therun_norun_text").text(overview_norun_text);
			$(".makeawish_text").text(makeawish_text);
			$(".sosvillagedenfantsmonde_text").text(sosvillagedenfantsmonde_text);
			$(".theevent_intro").text(theevent_intro);
			$(".this_page").text(this_page);
			$(".contents").text(contents);
			$(".what_q").text(what);
			$(".why_q").text(why);
			$(".when_q").text(when);
			$(".where_q").text(where);
			$(".theevent_what1").text(theevent_what1);
			$(".theevent_what2").text(theevent_what2);
			$(".theevent_what3").text(theevent_what3);
			$(".theevent_why1").text(theevent_why1);
			$(".theevent_when1").text(theevent_when1);
			$(".theevent_where1").text(theevent_where1);
			$(".therun_intro").text(therun_intro);

			$(".therun_disciplines_header").text(therun_disciplines_header);
			$(".therun_disciplines_intro").html(therun_disciplines_intro);
			$(".therun_disciplines_24hrun").text(therun_disciplines_24hrun);
			$(".therun_disciplines_24hrun_text").text(therun_disciplines_24hrun_text);
			$(".therun_disciplines_12hrun").text(therun_disciplines_12hrun);
			$(".therun_disciplines_12hrun_text").text(therun_disciplines_12hrun_text);
			$(".therun_disciplines_6hrun").text(therun_disciplines_6hrun);
			$(".therun_disciplines_6hrun_text").text(therun_disciplines_6hrun_text);

			$(".registration_card_header").text(registration);
			$(".participants_card_header").text(participants);
			$(".sections").text(sections);
			$(".contact").text(contact);
			$(".email_us").text(email_us);
			$(".contact_form").text(contact_form);

			$(".therun_rules_general_header").text(therun_rules_general_header);
			$(".therun_rules_general1").text(therun_rules_general1);
			$(".therun_rules_general2").text(therun_rules_general2);
			$(".therun_rules_general3").text(therun_rules_general3);
			$(".therun_rules_ranking_header").text(therun_rules_ranking_header);
			$(".therun_rules_ranking1").text(therun_rules_ranking1);
			$(".therun_rules_ranking2").text(therun_rules_ranking2);
			$(".therun_rules_ranking3").text(therun_rules_ranking3);
			$(".therun_rules_responsibility_header").text(therun_rules_responsibility_header);
			$(".therun_rules_responsibility1").text(therun_rules_responsibility1);
			$(".therun_rules_responsibility2").text(therun_rules_responsibility2);
			$(".therun_rules_responsibility2_1").text(therun_rules_responsibility2_1);
			$(".therun_rules_responsibility2_2").text(therun_rules_responsibility2_2);
			$(".therun_rules_responsibility2_3").text(therun_rules_responsibility2_3);
			$(".therun_rules_responsibility3").text(therun_rules_responsibility3);
			$(".therun_rules_responsibility4").text(therun_rules_responsibility4);
			$(".therun_rules_penalities_header").text(therun_rules_penalities_header);
			$(".therun_rules_penalities1").text(therun_rules_penalities1);
			$(".therun_rules_penalities2").text(therun_rules_penalities2);
			$(".therun_rules_penalities3").text(therun_rules_penalities3);
			$(".therun_rules_interruption_header").text(therun_rules_interruption_header);
			$(".therun_rules_interruption1").text(therun_rules_interruption1);
			$(".therun_rules_interruption2").text(therun_rules_interruption2);
			$(".therun_rules_cleanliness_header").text(therun_rules_cleanliness_header);
			$(".therun_rules_cleanliness1").text(therun_rules_cleanliness1);

		}
	}

	var userLang = navigator.language || navigator.userLanguage, countries = ['en', 'de', 'fr'], languages = ['en', 'de', 'fr'];

	console.log(userLang);

	changeLang(userLang);
})
