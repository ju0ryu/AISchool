import { MdAdd } from 'react-icons/md';
import '../scss/TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [form, setForm] = useState({
    id: '',
    pw: '',
    email: '',
    gender: '',
  });
  const { id, pw, email, gender } = form;

  const onChange = useCallback((e) => {
    const copyForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(copyForm);
  });
  const onSubmit = useCallback(
    (e) => {
      onInsert(form);
      // console.log(form);
    },
    [onInsert, form],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <div>
        <b>아이디 : </b>
        <input
          placeholder="아이디를 입력하세요"
          name="id"
          value={id}
          onChange={onChange}
        />
      </div>
      <div>
        <b>비밀번호 : </b>
        <input
          placeholder="비밀번호를 입력하세요"
          name="pw"
          value={pw}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이메일 : </b>
        <input
          placeholder="이메일을 입력하세요"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <b>성별 : </b>
        <input type="radio" name="gender" value="남자" onChange={onChange} />
        남자
        <input
          type="radio"
          name="gender"
          value="여자"
          onChange={onChange}
        />{' '}
        여자
      </div>
      <button type="submit">제출</button>
    </form>
  );
};
export default TodoInsert;
