import '../../styles/components/footer.scss'

export const Footer = () => {
  return(
    <footer className="footer">
      <a className='footer__link' href="https://github.com/destolyar">Frontend: Vladislav Metik</a>
      <a className='footer__link' href="https://github.com/karlsonru">Backend: karlsonru</a>
      <img style={{width: '100px'}} src="https://rs.school/images/rs_school_js.svg" alt=""/>
    </footer>
  )
}