import React from 'react'

interface HeadlineProps {
	level: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
	children: React.ReactNode
	paragraph?: boolean
}

const Headline = ({ level = 'h2', children, paragraph }: HeadlineProps) => {
	let type = level
	let levelClass
	if (paragraph) {
		levelClass = `${level}`
		type = 'p'
	}
	const Tag = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
		React.createElement(type, props, children)
	return <Tag className={levelClass}>{children}</Tag>
}

export default Headline
