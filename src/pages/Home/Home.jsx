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
            Kişilerinizi yönetmek için{" "}
            <Link to="/contacts" style={{ color: "#0b2fff", fontWeight: "bold" }}>
              Rehber Sayfasına
            </Link>{" "}
            gidin.
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
          <p>Lütfen üye olunuz veya giriş yapınız.</p>
          <div style={{ marginTop: "10px", display: "flex", gap: "10px", justifyContent: "center" }}>
            <Link
              to="/register"
              style={{
                background: "#0b2fff",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Üye Ol
            </Link>
            <Link
              to="/login"
              style={{
                background: "#28a745",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Giriş Yap
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}