import React from 'react'

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function ExternalLink({ href, children, className, style }: ExternalLinkProps) {
  const isInPageProtocol = href.startsWith('mailto:') || href.startsWith('tel:')

  return (
    <a
      href={href}
      className={className}
      style={style}
      target={isInPageProtocol ? undefined : '_blank'}
      rel={isInPageProtocol ? undefined : 'noopener noreferrer'}
    >
      {children}
    </a>
  )
}
