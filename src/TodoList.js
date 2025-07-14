export default function TodoList(props) {
  return (
    <section>
      <h1>TODO</h1>
      <table className="table is-hoverable is-fullwidth">
        <tbody>
          {props.list.map((item) => (
            <tr key={item.key}>
              <td>
                {item.done && <del>{item.title}</del>}
                {!item.done && item.title}
              </td>
              <td>
                <button className="button is-success" title="Complete" disabled="item.done">
                  &#9745;
                </button>
              </td>
              <td>
                <button className="button is-danger" title="Delete">
                  &#97456;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
