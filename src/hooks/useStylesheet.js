import { useEffect } from 'react'

export function useStylesheet(hrefs) {
  useEffect(() => {
    const links = []
    
    // Ensure hrefs is always treated as an array
    const hrefList = Array.isArray(hrefs) ? hrefs : [hrefs]

    hrefList.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
      links.push(link)
    })

    return () => {
      links.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link)
        }
      })
    }
  }, [hrefs])
}
