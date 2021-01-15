const Posts = () => {
  return (
      <>
        <div>
          posts
          <div>
            <h2>
              MySQL 과 Express 연동 에러
            </h2>
            <div>
              <p>
                에러코드:
              </p>
              <p>
                <samp>
                  Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
                </samp>
              </p>
              <p>
                해결책:
              </p>
              <p>
                <code>
                  <p>
                    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY [password];
                  </p>
                  <p>
                    FLUSH PRIVILEGES;
                  </p>
                </code>
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default Posts