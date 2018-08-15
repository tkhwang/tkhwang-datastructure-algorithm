# CryptoZombie.io

## 챕터 2: 컨트랙트

```javascript
pragma solidity ^0.4.19;//1. 여기에 솔리디티 버전 적기

//2. 여기에 컨트랙트 생성
contract ZombieFactory {

}
```

## 챕터 3: 상태 변수 & 정수

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    // 여기서 시작
    uint dnaDigits = 16;
}
```

## 챕터 4: 수학 연산

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

}
```

## 챕터 5: 구조체

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    // 여기서 시작
    struct Zombie {
        string name;
        uint dna;
    }
}
```

## 챕터 6: 배열

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    // 여기서 시작
    Zombie[] public zombies;

}
```

## 챕터 7: 함수 선언

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    // 여기서 시작
    function createZombie(string _name, uint _dna) {

    }

}
```

## 챕터 8: 구조체와 배열 활용하기

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function createZombie(string _name, uint _dna) {
        zombies.push(Zombie(_name, _dna));
    }
}
```

## 챕터 9: Private / Public 함수

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        zombies.push(Zombie(_name, _dna));
    }
}
```

## 챕터 10: 함수 더 알아보기

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        zombies.push(Zombie(_name, _dna));
    }

    // 여기서 시작
    function _generateRandomDna(string _str) private view returns (uint)  {

    }
}
```

## 챕터 11: Keccak256 과 형 변환

```javascript
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        zombies.push(Zombie(_name, _dna));
    }

    function _generateRandomDna(string _str) private view returns (uint) {
        // 여기서 시작
        uint rand = uint(keccak256(_str));
        return rand % dnaModulus;
    }

}
```
