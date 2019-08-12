package com.cpa.prodata.converters;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class KeyProperty {

    public static String DATABASE_ENCRYPTION_KEY;

    @Value("${spring.datasource.data-password}")
    public void setDatabase(String databaseEncryptionKey) {
        DATABASE_ENCRYPTION_KEY = databaseEncryptionKey;
    }

}
