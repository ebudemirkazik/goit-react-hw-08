import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {isLoggedIn ? (
        <>
          <h2>Hoş geldiniz!</h2>
          <p style={{ marginTop: "10px" }}>
            <Link
              to="/contacts"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Rehberinizi görüntülemek için buraya tıklayın.
            </Link>
          </p>
        </>
      ) : (
        <div
          style={{
            background: "#fff3cd",
            border: "1px solid #ffeeba",
            padding: "15px",
            borderRadius: "8px",
            display: "inline-block",
            fontWeight: "500",
            color: "#856404",
          }}
        >
          Lütfen üye olunuz veya giriş yapınız.
        </div>
      )}
    </div>
  );
}