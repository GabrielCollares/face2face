import './card.css'
import {avatar} from '../avatar'

/**
 * @typedef {Object} CardProps
 * @property {string} CardProps.img - some description here
 * @property {string} CardProps.cargo - some role here
 * @property {string} CardProps.nome - some namehere
 * @param {CardProps} props
 */
export function card({cargo, nome, img}) {
  return `
  <div>
  <div class="header">${avatar({imgSrc:img, descricao:'moacir jr'})}</div>
  <div class="body">
  <p>
  nome: ${nome}
  </p>
  <p>
  cargo: ${cargo}
  </p>
  </div>
  </div>
 

  `
}
