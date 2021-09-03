//No props
// No dependencias
// Es un componente puro



const Users = () => (
    <section>
      <header>
        <h1>List of users</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>john</td>
            <td>john@test.com</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>jane</td>
            <td>jane@test.com</td>
            <td>Jane Doe</td>
          </tr>
          <tr>
            <td>Joe</td>
            <td>joe@test.com</td>
            <td>Joe Public</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
  
  export default Users;