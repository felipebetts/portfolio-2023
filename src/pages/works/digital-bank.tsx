import LazyImage from '@/components/lazy-image'
import WorkDetails from '@/components/works/work-details'
import Image from 'next/image'
import React from 'react'

const DigitalBank = () => {
  return (
    <WorkDetails sub="Valepay" title="Digital Bank">
      <section className="py-3">
        <LazyImage
          alt="cover"
          src="/images/valepay/1.jpg"
          height={600}
          width={1200}
        />
      </section>
      <section className="py-3">
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          dapibus arcu quis odio hendrerit rutrum. Phasellus mollis augue
          lectus, ut cursus enim ultricies a. Integer vel aliquet est. Nullam a
          tincidunt turpis, a viverra sem. Praesent quam sapien, pretium at
          nulla et, porta mollis quam. Morbi a lectus turpis. Sed rhoncus
          sollicitudin orci a ullamcorper. Etiam ac arcu pretium, sagittis
          lectus non, lobortis felis. Morbi libero ipsum, interdum in eros
          vitae, lacinia commodo leo. Curabitur leo lacus, bibendum ac fringilla
          vitae, pharetra quis sapien. Sed est enim, aliquam vitae venenatis ut,
          suscipit in sapien. Vestibulum iaculis finibus blandit.
        </p>
        <p className="py-2">
          Nunc ultricies aliquam nisi eget convallis. Aenean vel eros ultrices,
          luctus odio eu, accumsan leo. Etiam euismod laoreet pulvinar. Quisque
          elit libero, elementum eu libero ut, consequat posuere risus. Fusce
          ullamcorper aliquam neque eu congue. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
          viverra lacinia libero a maximus. Donec lacinia porttitor tincidunt.
          Duis rhoncus arcu feugiat tortor rutrum cursus. Vestibulum egestas
          tempor mattis. Donec sit amet auctor dui. Praesent ut molestie nisl.
          Donec viverra porta dolor, eget facilisis augue vulputate ut. Duis
          congue est mi, id malesuada orci cursus et. In eu libero hendrerit,
          finibus diam eu, venenatis libero. Mauris semper justo eu justo
          volutpat facilisis.
        </p>
        <p className="py-2">
          Duis non faucibus magna. Cras dapibus velit in dui bibendum vehicula.
          Pellentesque semper gravida mauris. Proin non sem eget orci blandit
          fringilla vitae elementum ipsum. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Proin accumsan,
          odio eu pulvinar facilisis, est mi elementum lectus, non ullamcorper
          est sapien vel nulla. Nulla facilisi. Sed viverra, ipsum pellentesque
          tincidunt venenatis, tellus sem vehicula erat, sit amet euismod neque
          mauris at nisl. Mauris urna est, blandit ut elit nec, porttitor
          lobortis arcu. Nam sollicitudin, nisl vel facilisis gravida, nisi
          massa elementum augue, id elementum ligula nisl eu lacus. Proin sed
          elit nulla.
        </p>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          dapibus arcu quis odio hendrerit rutrum. Phasellus mollis augue
          lectus, ut cursus enim ultricies a. Integer vel aliquet est. Nullam a
          tincidunt turpis, a viverra sem. Praesent quam sapien, pretium at
          nulla et, porta mollis quam. Morbi a lectus turpis. Sed rhoncus
          sollicitudin orci a ullamcorper. Etiam ac arcu pretium, sagittis
          lectus non, lobortis felis. Morbi libero ipsum, interdum in eros
          vitae, lacinia commodo leo. Curabitur leo lacus, bibendum ac fringilla
          vitae, pharetra quis sapien. Sed est enim, aliquam vitae venenatis ut,
          suscipit in sapien. Vestibulum iaculis finibus blandit.
        </p>
        <p className="py-2">
          Nunc ultricies aliquam nisi eget convallis. Aenean vel eros ultrices,
          luctus odio eu, accumsan leo. Etiam euismod laoreet pulvinar. Quisque
          elit libero, elementum eu libero ut, consequat posuere risus. Fusce
          ullamcorper aliquam neque eu congue. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
          viverra lacinia libero a maximus. Donec lacinia porttitor tincidunt.
          Duis rhoncus arcu feugiat tortor rutrum cursus. Vestibulum egestas
          tempor mattis. Donec sit amet auctor dui. Praesent ut molestie nisl.
          Donec viverra porta dolor, eget facilisis augue vulputate ut. Duis
          congue est mi, id malesuada orci cursus et. In eu libero hendrerit,
          finibus diam eu, venenatis libero. Mauris semper justo eu justo
          volutpat facilisis.
        </p>
        <p className="py-2">
          Duis non faucibus magna. Cras dapibus velit in dui bibendum vehicula.
          Pellentesque semper gravida mauris. Proin non sem eget orci blandit
          fringilla vitae elementum ipsum. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Proin accumsan,
          odio eu pulvinar facilisis, est mi elementum lectus, non ullamcorper
          est sapien vel nulla. Nulla facilisi. Sed viverra, ipsum pellentesque
          tincidunt venenatis, tellus sem vehicula erat, sit amet euismod neque
          mauris at nisl. Mauris urna est, blandit ut elit nec, porttitor
          lobortis arcu. Nam sollicitudin, nisl vel facilisis gravida, nisi
          massa elementum augue, id elementum ligula nisl eu lacus. Proin sed
          elit nulla.
        </p>
      </section>
    </WorkDetails>
  )
}

export default DigitalBank
