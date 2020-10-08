import React from 'react'

type AppProps = {
  navItemTitle: string
  active: string | undefined
  onClick: () => void
}

const NavLink: React.FC<AppProps> = ({
  navItemTitle,
  active,
  onClick,
}: AppProps) => {
  const textOpacity =
    active === navItemTitle.toLowerCase() ? '' : 'text-opacity-50'

  return (
    <>
      <p
        className={`${textOpacity} text-white cursor-pointer font-sans block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4`}
        onClick={onClick}
      >
        {navItemTitle}
      </p>
    </>
  )
}

export default NavLink
