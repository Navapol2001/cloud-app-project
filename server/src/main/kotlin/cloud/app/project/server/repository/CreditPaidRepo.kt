package cloud.app.project.server.repository

import cloud.app.project.server.model.CreditPaid
import cloud.app.project.server.model.CreditView
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CreditPaidRepo: JpaRepository<CreditPaid, Int> {
    @Query("""
        SELECT a FROM CreditView a WHERE SUBSTRING(a.upd_date, 1, 4) = :year
    """)
    fun findByYear(year: String, pageable: Pageable): Page<CreditPaid>

    @Query("""
        SELECT a FROM CreditView a WHERE a.cust_id LIKE %:custId% 
        OR a.customer_name LIKE %:custId%
    """)
    fun findByCustId(custId: String, pageable: Pageable): Page<CreditPaid>

    @Query("""
        SELECT a FROM CreditView a 
        WHERE (a.cust_id LIKE CONCAT('%', :custId, '%') OR a.customer_name LIKE CONCAT('%', :custId, '%')) 
        AND SUBSTRING(a.upd_date, 1, 4) = :year
    """)
    fun findByFilterParam(custId: String, year: String, pageable: Pageable): Page<CreditPaid>
}