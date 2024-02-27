package cloud.app.project.server.repository

import cloud.app.project.server.model.CreditView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.time.LocalDate

@Repository
interface CreditViewRepo: JpaRepository<CreditView, Int> {

    @Query("""
        SELECT a FROM CreditView a WHERE SUBSTRING(a.upd_date, 1, 4) = :year
    """)
    fun findByYear(year: String): List<CreditView>

    @Query("""
        SELECT a FROM CreditView a WHERE a.cust_id LIKE %:custId% 
        OR a.customer_name LIKE %:custId%
    """)
    fun findByCustId(custId: String): List<CreditView>

    @Query("""
        SELECT a FROM CreditView a 
        WHERE (a.cust_id LIKE CONCAT('%', :custId, '%') OR a.customer_name LIKE CONCAT('%', :custId, '%')) 
        AND SUBSTRING(a.upd_date, 1, 4) = :year
    """)
    fun findByFilterParam(custId: String, year: String): List<CreditView>

}