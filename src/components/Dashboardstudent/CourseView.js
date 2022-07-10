import demoVid from "../../Demovid/demoVid.mp4";
import Sidebar from "./Sidebar";
const CourseView = () => {
  return (
    <div>
      <Sidebar />
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="content">
          <header className="my-4">
            <small>
              <i className="bi bi-house me-2"></i>
              OBJECT-ORIENTED JAVASCRIPT
            </small>
            <h2>Objects in Depth</h2>
          </header>
          <hr className="border-top border-info border-3" />
          {/* coursevedio  */}
          <div>
            <video
              src={demoVid}
              controls
              style={{ width: "100%" }}
              poster="https://hackr.io/blog/best-javascript-courses/thumbnail/large?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1"
            ></video>
          </div>
          {/* About course and text informations  */}
          <div className="mt-5">
            <h5 className="fw-semibold">Course Structure</h5>
            <p>
              Welcome! This course covers object-oriented programming with
              JavaScript. Here's a quick breakdown of what each of the lessons
              in the course looks like:
            </p>
            <ul>
              <li>
                <b>Lesson 1</b> details how to create, access, and modify
                objects.
              </li>
              <li>
                <b>Lesson 2</b> examines how JavaScript functions are
                first-class functions.
              </li>
              <li>
                <b>Lesson 3</b> illustrates JavaScript's abstractions over
                traditional classes and inheritance.
              </li>
            </ul>
          </div>
          {/* Course text  */}
          <div className="mt-5">
            <h5 className="fw-semibold">Course Starting Off</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              repellendus nam odio accusantium, quas ullam ratione illo esse
              officiis voluptatum eligendi architecto dolores fugiat fuga optio
              aspernatur minima error corporis voluptates. Qui magni tempora
              laborum officia modi iusto consectetur in alias, quibusdam esse
              possimus, quisquam ea commodi saepe facere eum dolores optio
              deserunt culpa blanditiis doloremque labore, temporibus aliquam
              veniam. Nam porro iusto eaque quidem error deleniti vero odio
              itaque ad, saepe magni modi nostrum quam sequi reiciendis animi,
              et adipisci nihil aperiam ipsa quod labore eum, voluptate
              reprehenderit! Nam sunt quam magni. Porro suscipit exercitationem
              minus debitis inventore enim delectus quod eos magni corporis.
              Aliquam voluptate laudantium odit eos consectetur. Voluptas, dolor
              aspernatur eveniet laboriosam voluptates, quos corporis nulla in
              praesentium numquam sunt cumque soluta voluptate quaerat magni
              tempora, dolore repellendus doloribus expedita pariatur impedit
              eaque voluptatum quibusdam? Commodi animi sunt aspernatur tempore
              unde autem numquam, officia perferendis maiores officiis
              consequuntur, dolores accusamus molestias quos. Doloremque odit
              non est excepturi ipsum accusantium beatae natus reiciendis
              corporis numquam quam nemo eum dignissimos cum repellendus ea sunt
              temporibus dolorem inventore, accusamus ab veniam distinctio
              labore. Itaque laborum, quam rerum fugit quae sequi quisquam at
              eum nulla dolorum iusto magni id quasi aperiam minima dolorem quo
              autem libero recusandae commodi natus enim? Vitae facere beatae
              dignissimos consectetur nulla velit omnis, impedit voluptatibus
              iusto commodi ea culpa nisi, nesciunt obcaecati saepe cum
              provident magni voluptates eaque incidunt cupiditate dolor
              necessitatibus? Distinctio culpa atque odit obcaecati repellat
              nemo vitae ad porro necessitatibus, impedit eos perferendis earum
              quis exercitationem libero. Perferendis dolorum unde, obcaecati ad
              et earum velit amet accusamus ratione rerum impedit similique
              voluptatem, illo sapiente at. Sed doloremque assumenda molestiae
              voluptate ipsam, impedit eius incidunt, illum reiciendis placeat
              maxime ea, porro cum aspernatur. Exercitationem vero deleniti
              alias, dicta consectetur dolorem quibusdam iure eaque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
