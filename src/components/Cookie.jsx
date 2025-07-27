import { translations } from "../config/lang"

export const Cookie = () => {
  return (
    <div className="cookie-block">
      <h3 className="cookie-block__title">Сookie</h3>
      <p className="cookie-block__text">{translations.en.cookie}</p>
      <button className="cookie-block__btn">Accept</button>
    </div>
  )
}
