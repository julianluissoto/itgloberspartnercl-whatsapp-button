import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formatedMessage = message.replace(/ /g, '%20')

  return (
    <div className="fixed bottom-1 right-1 flex flex-column .z-900">
      <a
        href={`https://wa.me/${phone}?text=${formatedMessage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={logo} width={width} height={height} alt="whatsapp logo" />
      </a>
    </div>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'my-logo',
  phone: '30004504589',
  message: 'Welcome to Venex hardware, how can we help you?',
  width: 70,
  height: 70,
}

WhatsappButton.schema = {
  title: 'whatsapp Button',
  type: 'object',
  properties: {
    logo: {
      title: 'whatsapp logo brand related',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'phone',
      description: 'add the phone number',
      type: 'string',
    },
    message: {
      title: 'phone',
      description: 'add your message for the client',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'width',
      description: 'width logo',
      type: 'number',
    },
    height: {
      title: 'height',
      description: 'height logo',
      type: 'number',
    },
  },
}

export default WhatsappButton
