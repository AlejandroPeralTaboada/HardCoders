package com.alexperal.hardcoders;

import lombok.Value;

import java.io.Serializable;

@Value
public class TeamDTO implements Serializable {
    String name;
    String id;
}
