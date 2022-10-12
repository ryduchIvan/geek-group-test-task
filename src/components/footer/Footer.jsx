//CSS
import "./footer.scss";
//Img
import GooglePlay from "assets/img/google-play.jpg"
//Components
import { FooterList } from "./footerList/FooterList";
function Footer() {
	const footerFirstList = ["Довідка для покупців", "Отримати підтримку", "Як купувати","Як залишити корисний відкуг", "Програма Захисту Покупців","Рекомендації з беспечних покупок"];
	const footerSecondList = ["Довідка для продавців", "Як почати продавати" ,"Тарифи" , "Угода користувача" , "Політика конфіденційності", "Правила користвуання порталом", "Бонусна програма"];
	const footerThirdList = ["Про нас","Довідка та FAQ", "Захист легальност контенту", "Адміністрація", "Вакансії"];
 	return(
	<footer class="footer" >
		<div class="footer__container container">
			<div class="footer__content">
				<div class="row footer__row">
					<FooterList list={footerFirstList}/>
					<FooterList list={footerSecondList}/>
					<FooterList list={footerThirdList}/>
					<ul className="col-12 col-md-6 col-xl-3 footer__list">
						<li className="footer__list-link">Мобільний додаток</li>
						<img src={GooglePlay} alt="google-play" className="footer__img"/>
					</ul>
				</div>
				<p className="footer__data">© 2022 Monvalise</p>
			</div>
		</div>
	</footer>
	)
}

export {Footer};