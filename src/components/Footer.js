import React, { Fragment } from 'react';
import Emoji from './Emoji';

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <a href="https://wa.me/message/EJNROGJRMLBZP1">Made with <Emoji label="heart" symbol="❤️"/> by Naman</a>
      </div>
      <footer className="text-center text-dark mt-3 my-2 p-2 ">
        <a href="https://wa.me/message/EJNROGJRMLBZP1">Hacked by a lowly <span> 7 1⁄2</span> CG human <Emoji label="monkey" symbol="🙈"/> </a>
      </footer>
    </Fragment>
  )
}

export default Footer
